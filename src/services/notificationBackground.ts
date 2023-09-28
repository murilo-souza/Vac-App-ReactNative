import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import notifee, { AndroidImportance } from '@notifee/react-native'

const TASK_NAME = 'SEND_NOTIFICATION'

interface DeviceDataProps {
  humidity: number
  temperature: number
  temperatureH: number
  timestamp: string
}

async function displayNotifications() {
  await notifee.requestPermission()

  const channelId = await notifee.createChannel({
    id: 'test',
    name: 'Vendas',
    vibration: true,
    importance: AndroidImportance.HIGH,
  })

  await notifee.displayNotification({
    id: '7',
    title: 'Temperatura próxima do limite',
    body: 'Verificar a câmara de conservação, pois ha algo de errado ',
    android: { channelId },
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
            const reverseData = filteredData.reverse()
            if (reverseData[0].temperature > 28) {
              displayNotifications()
              console.log('task register')
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
    minimumInterval: 60 * 2,
    stopOnTerminate: false,
  })
}
