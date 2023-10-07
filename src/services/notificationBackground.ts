import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch'
import database from '@react-native-firebase/database'
import notifee, { AndroidImportance } from '@notifee/react-native'
import auth from '@react-native-firebase/auth'

const TASK_NAME = 'SEND_NOTIFICATION'

interface DeviceDataProps {
  humidity: number
  temperature: number
  temperatureH: number
  timestamp: string
}

interface DeviceProperties {
  max_humidity: number
  min_humidity: number
  max_temperature: number
  min_temperature: number
}

async function displayNotifications() {
  await notifee.requestPermission()

  const channelId = await notifee.createChannel({
    id: 'Warning',
    name: 'Temperature',
    vibration: true,
    importance: AndroidImportance.HIGH,
  })

  await notifee.displayNotification({
    id: '7',
    title: 'Temperatura próxima do <strong>limite</strong>',
    body: '<strong>Verificar a câmara de conservação</strong>, temperatura próxima do limite seguro',
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  })
}

TaskManager.defineTask(TASK_NAME, () => {
  try {
    if (auth().currentUser.uid) {
      database()
        .ref(`/UsersData/${auth().currentUser.uid}/readings`)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const dataArray = []
            snapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val()
              dataArray.push({ ...data })
              return data
            })
            const filteredData = dataArray.filter(
              (item: DeviceDataProps) => item.temperature !== 85,
            )
            const filteredData2 = filteredData.filter(
              (item: DeviceDataProps) => item.temperature !== -127,
            )
            const reverseData = filteredData2.reverse()
            const currentDate = new Date(Date.now())
            const filteredDate = reverseData.filter((item) => {
              const timestampNumber = parseInt(item.timestamp, 10)
              const dateUTC = new Date(timestampNumber * 1000)
              return (
                dateUTC.getDate() === currentDate.getDate() &&
                dateUTC.getMonth() === currentDate.getMonth() &&
                dateUTC.getFullYear() === currentDate.getFullYear()
              )
            })
            if (filteredDate.length !== 0) {
              database()
                .ref(`/UsersData/${auth().currentUser.uid}/properties`)
                .on('value', (snapshot) => {
                  const parameters: DeviceProperties = snapshot.val()
                  if (
                    filteredDate[0].temperature >
                      Number(parameters.max_temperature) - 1 ||
                    filteredDate[0].temperature <
                      Number(parameters.min_temperature) + 1
                  ) {
                    displayNotifications()
                  }
                })
            }
          }
        })
    }
  } catch (error) {
    console.error(error)
  }
})

export function RegisterTask() {
  return BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: 60,
    stopOnTerminate: false,
  })
}
