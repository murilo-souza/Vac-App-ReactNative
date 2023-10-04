import React from 'react'
import {
  ButtonContainer,
  ButtonTitle,
  Container,
  ParametersTitle,
  Title,
  Wrapper,
} from './styles'
import { HeaderHome } from '../../components/HeaderHome'
import { StatusBar } from 'expo-status-bar'
import { Input } from '../../components/Input'
import { useDevice } from '../../hook/useDevice'

export function Parameters() {
  const { deviceProps } = useDevice()

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <Wrapper>
          <Title>Ajuste de parâmetros</Title>

          <ParametersTitle>Temperatura</ParametersTitle>
          <Input
            title="Temperatura máxima"
            keyboardType="numeric"
            value={String(deviceProps.max_temperature)}
          />
          <Input
            title="Temperatura mínima"
            keyboardType="numeric"
            value={String(deviceProps.min_temperature)}
          />

          <ParametersTitle>Umidade</ParametersTitle>
          <Input
            title="Umidade máxima"
            keyboardType="numeric"
            value={String(deviceProps.max_humidity)}
          />
          <Input
            title="Umidade mínima"
            keyboardType="numeric"
            value={String(deviceProps.min_humidity)}
          />

          <ButtonContainer>
            <ButtonTitle>Definir parâmetros</ButtonTitle>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  )
}
