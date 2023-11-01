import React from 'react'
import { Container } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { StatusBar } from 'expo-status-bar'
import { VaccineCard } from '../../components/VaccineCard'
import { useNavigation } from '@react-navigation/native'
import { HumidityNotification } from '../../utils/humidityNotification'
import { Button } from 'react-native'

export function Home() {
  const navigation = useNavigation()

  function handleRealtime() {
    navigation.navigate('realtime')
  }

  // function handleNotification() {
  //   HumidityNotification()
  // }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <VaccineCard
          batchCode="LXTH421651"
          isRealTime
          onPress={handleRealtime}
        />

        {/* <Button title="Aperta" onPress={handleNotification} /> */}
      </Container>
    </>
  )
}
