import React from 'react'
import { Container } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { StatusBar } from 'expo-status-bar'
import { VaccineCard } from '../../components/VaccineCard'
import { useNavigation } from '@react-navigation/native'
import { useDevice } from '../../hook/useDevice'

export function Home() {
  const navigation = useNavigation()
  const { deviceData } = useDevice()

  function handleRealtime() {
    navigation.navigate('realtime')
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <VaccineCard
          batchCode={deviceData.timestamp}
          isRealTime
          onPress={handleRealtime}
        />
      </Container>
    </>
  )
}
