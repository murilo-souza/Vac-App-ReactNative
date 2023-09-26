import React from 'react'
import { Container } from './styles'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'

export function Loading() {
  const theme = useTheme()

  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.blue600} />
    </Container>
  )
}
