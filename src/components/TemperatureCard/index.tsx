import React from 'react'
import { Brick, Container, LeftContent, Temperature, Time } from './styles'

export function TemperatureCard() {
  return (
    <Container>
      <LeftContent>
        <Brick />
        <Time>17h30</Time>
      </LeftContent>
      <Temperature>10 °C</Temperature>
    </Container>
  )
}
