import notifee, { AndroidImportance } from '@notifee/react-native'

export async function TemperatureNotification() {
  await notifee.requestPermission()

  const channelId = await notifee.createChannel({
    id: 'Warning',
    name: 'Problem in the box',
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
