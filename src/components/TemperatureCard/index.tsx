import React from 'react'
import { ColorDotIdentification, Container, Temperature, Time } from './styles'

interface TemperatureCardProps {
  time: string
  temperature: number
  variant: 'normal' | 'problem'
  defaultColor: 'green' | 'blue'
}

export function TemperatureCard({
  time,
  temperature,
  variant,
  defaultColor,
}: TemperatureCardProps) {
  return (
    <Container variant={variant} defaultColor={defaultColor}>
      <Time>{time}</Time>
      <Temperature>{temperature.toFixed(2)} °C</Temperature>
      <ColorDotIdentification variant={variant} defaultColor={defaultColor} />
    </Container>
  )
}
