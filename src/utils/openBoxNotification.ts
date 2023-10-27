import notifee, { AndroidImportance } from '@notifee/react-native'

export async function OpenBoxNotification() {
  await notifee.requestPermission()

  const channelId = await notifee.createChannel({
    id: 'Warning',
    name: 'Problem in the box',
    vibration: true,
    importance: AndroidImportance.HIGH,
  })

  await notifee.displayNotification({
    id: '9',
    title: 'A camara de conservação está <strong>ABERTA</strong>',
    body: '<strong>Verificar a câmara de conservação</strong>, ela consta como <strong>ABERTA</strong> ',
    android: {
      groupId: '123',
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  })
}
