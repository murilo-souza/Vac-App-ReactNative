import React from 'react'
import { Container, Date, IconButton } from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import {} from 'date-fns'

interface DateSelectorProps {
  date: string
}

export function DateSelecter({ date }: DateSelectorProps) {
  const theme = useTheme()

  return (
    <Container>
      <IconButton>
        <CaretLeft size={32} color={theme.colors.gray800} />
      </IconButton>
      <Date>{date}</Date>
      <IconButton>
        <CaretRight size={32} color={theme.colors.gray800} />
      </IconButton>
    </Container>
  )
}
