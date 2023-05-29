import React from 'react'
import { Container } from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { StatusBar } from 'expo-status-bar'
import { VaccineCard } from '../../components/VaccineCard'

export function Home() {
  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <VaccineCard batchCode="LXTS26367" isRealTime />
      </Container>
    </>
  )
}
