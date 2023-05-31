import React from 'react'
import { Container } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { StatusBar } from 'expo-status-bar'
import { VaccineCard } from '../../components/VaccineCard'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  function handleRealtime() {
    navigation.navigate('realtime')
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <VaccineCard
          batchCode="LXTS26367"
          isRealTime
          onPress={handleRealtime}
        />
      </Container>
    </>
  )
}
