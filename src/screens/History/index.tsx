import React from 'react'
import { Container, Selector } from './styles'
import { StatusBar } from 'expo-status-bar'
import { HeaderHome } from '../../components/HeaderHome'
import { VaccineCard } from '../../components/VaccineCard'
import { DateSelecter } from '../../components/DateSelecter'

export function History() {
  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <Selector>
          <DateSelecter />
        </Selector>
        <VaccineCard batchCode="LXT2343767" />
      </Container>
    </>
  )
}
