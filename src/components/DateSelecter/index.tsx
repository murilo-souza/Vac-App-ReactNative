import React from 'react'
import { Container, Date, IconButton } from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

export function DateSelecter() {
  const theme = useTheme()

  return (
    <Container>
      <IconButton>
        <CaretLeft size={32} color={theme.colors.gray800} />
      </IconButton>
      <Date>15/11/2023</Date>
      <IconButton>
        <CaretRight size={32} color={theme.colors.gray800} />
      </IconButton>
    </Container>
  )
}
