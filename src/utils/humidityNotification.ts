import notifee, { AndroidImportance } from '@notifee/react-native'

export async function HumidityNotification() {
  await notifee.requestPermission()

  const channelId = await notifee.createChannel({
    id: 'Warning',
    name: 'Problem in the box',
    vibration: true,
    importance: AndroidImportance.HIGH,
  })

  await notifee.displayNotification({
    id: '8',
    title: 'Variação <strong>incomum</strong> nos dados de umidade',
    body: '<strong>Verificar a câmara de conservação</strong>, variação <strong>incomum</strong> nos dados de umidade',
    android: {
      channelId,
      groupId: '123',
      pressAction: {
        id: 'default',
      },
    },
  })
}
