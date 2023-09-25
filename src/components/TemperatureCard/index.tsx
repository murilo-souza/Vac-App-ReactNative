import React from 'react'
import { Brick, Container, LeftContent, Temperature, Time } from './styles'

interface TemperatureCardProps {
  time: string
  temperature: number
}

export function TemperatureCard({ time, temperature }: TemperatureCardProps) {
  return (
    <Container>
      <LeftContent>
        <Brick />
        <Time>{time}</Time>
      </LeftContent>
      <Temperature>{temperature.toFixed(2)} °C</Temperature>
    </Container>
  )
}
