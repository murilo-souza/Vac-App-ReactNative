import React from 'react'
import { Container } from './styles'
import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { HeaderHome } from '../../components/HeaderHome'

export function FAQ() {
  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <Text>FAQ screen</Text>
      </Container>
    </>
  )
}
