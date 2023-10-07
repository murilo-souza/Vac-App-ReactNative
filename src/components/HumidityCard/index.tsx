import React from 'react'
import { Brick, Container, LeftContent, Humidity, Time } from './styles'

interface HumidityCardProps {
  time: string
  temperature: number
  variant: 'normal' | 'problem'
}

export function HumidityCard({
  time,
  temperature,
  variant,
}: HumidityCardProps) {
  return (
    <Container variant={variant}>
      <LeftContent>
        <Brick variant={variant} />
        <Time variant={variant}>{time}</Time>
      </LeftContent>
      <Humidity variant={variant}>{temperature.toFixed(2)}%</Humidity>
    </Container>
  )
}
