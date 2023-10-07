import React, { useState } from 'react'
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
import database from '@react-native-firebase/database'
import { Alert, ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'

export function Parameters() {
  const { user, deviceParameters } = useDevice()
  const theme = useTheme()

  const [maxTemperature, setMaxTemperature] = useState(
    String(deviceParameters.max_temperature),
  )
  const [minTemperature, setMinTemperature] = useState(
    String(deviceParameters.min_temperature),
  )
  const [maxHumidity, setMaxHumidity] = useState(
    String(deviceParameters.max_humidity),
  )
  const [minHumidity, setMinHumidity] = useState(
    String(deviceParameters.min_humidity),
  )
  const [isLoading, setIsLoading] = useState(false)

  function UpdateParameters() {
    if (!maxTemperature || !minTemperature || !maxHumidity || !minHumidity) {
      Alert.alert('Erro', 'Todos os campos precisam ser preenchidos')
    } else {
      try {
        setIsLoading(true)
        database().ref(`/UsersData/${user.uid}/properties`).update({
          max_humidity: maxHumidity,
          max_temperature: maxTemperature,
          min_humidity: minHumidity,
          min_temperature: minTemperature,
        })
        Alert.alert('Sucesso', 'Parâmetros atualizados com sucesso')
        setIsLoading(false)
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível atualizar os parâmetros')
        console.log(error)
        setIsLoading(false)
      }
    }
  }

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
            onChangeText={setMaxTemperature}
            value={maxTemperature}
            placeholder="Inserir a temperatura máxima desejada"
          />
          <Input
            title="Temperatura mínima"
            keyboardType="numeric"
            onChangeText={setMinTemperature}
            value={minTemperature}
            placeholder="Inserir a temperatura mínima desejada"
          />

          <ParametersTitle>Umidade</ParametersTitle>
          <Input
            title="Umidade máxima"
            keyboardType="numeric"
            onChangeText={setMaxHumidity}
            value={maxHumidity}
            placeholder="Inserir a umidade máxima desejada"
          />
          <Input
            title="Umidade mínima"
            keyboardType="numeric"
            onChangeText={setMinHumidity}
            value={minHumidity}
            placeholder="Inserir a umidade mínima desejada"
          />

          <ButtonContainer disabled={isLoading} onPress={UpdateParameters}>
            {isLoading ? (
              <ActivityIndicator size="large" color={theme.colors.white} />
            ) : (
              <ButtonTitle>Definir parâmetros</ButtonTitle>
            )}
          </ButtonContainer>
        </Wrapper>
      </Container>
    </>
  )
}
