import React from 'react'
import { Container } from './styles'
import { TemperatureCard } from '../../components/TemperatureCard'
import { HeaderFocus } from '../../components/HeaderFocus'
import { StatusBar } from 'expo-status-bar'

export function Realtime() {
  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus />
      <Container>
        <TemperatureCard />
      </Container>
    </>
  )
}
