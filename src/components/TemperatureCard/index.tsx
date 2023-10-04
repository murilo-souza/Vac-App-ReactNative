import React from 'react'
import { Container, Temperature, Time } from './styles'

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
      <Time variant={variant} defaultColor={defaultColor}>
        {time}
      </Time>
      <Temperature variant={variant} defaultColor={defaultColor}>
        {temperature.toFixed(2)} °C
      </Temperature>
    </Container>
  )
}
