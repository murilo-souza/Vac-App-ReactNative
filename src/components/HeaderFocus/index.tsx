import React from 'react'
import { Container, Title } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export function HeaderFocus() {
  const theme = useTheme()

  return (
    <Container>
      <BorderlessButton>
        <ArrowLeft size={32} color={theme.colors.white} />
      </BorderlessButton>
      <Title>Lote LXTEGA8765</Title>
    </Container>
  )
}
