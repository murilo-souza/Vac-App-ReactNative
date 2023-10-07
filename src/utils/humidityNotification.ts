import notifee, { AndroidImportance } from '@notifee/react-native'

export async function HumidityNotification() {
  await notifee.requestPermission()

  const channelId = await notifee.createChannel({
    id: 'Warning Humidity',
    name: 'Humidity',
    vibration: true,
    importance: AndroidImportance.HIGH,
  })

  await notifee.displayNotification({
    id: '8',
    title: 'Umidade próxima do <strong>limite</strong>',
    body: '<strong>Verificar a câmara de conservação</strong>, umidade próxima do limite seguro',
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  })
}
