import React from 'react'
import { Brick, Container, LeftContent, Temperature, Time } from './styles'

interface TemperatureCardProps {
  time: string
  temperature: number
  variant: 'normal' | 'problem'
}

export function TemperatureCard({
  time,
  temperature,
  variant,
}: TemperatureCardProps) {
  return (
    <Container variant={variant}>
      <LeftContent>
        <Brick variant={variant} />
        <Time variant={variant}>{time}</Time>
      </LeftContent>
      <Temperature variant={variant}>{temperature.toFixed(2)} °C</Temperature>
    </Container>
  )
}
