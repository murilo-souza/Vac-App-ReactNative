import React from 'react'
import {
  Container,
  ContainerSelector,
  Date,
  IconButton,
  Selector,
} from './styles'
import { StatusBar } from 'expo-status-bar'
import { HeaderHome } from '../../components/HeaderHome'
import { VaccineCard } from '../../components/VaccineCard'
import { useNavigation, useTheme } from '@react-navigation/native'
import { dateFormat } from '../../utils/dateFormat'
import { CaretLeft, CaretRight } from 'phosphor-react-native'

export function History() {
  const navigation = useNavigation()
  const theme = useTheme()

  function handleTemperatureHistory() {
    navigation.navigate('temperatureHistory')
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <Selector>
          <ContainerSelector>
            <IconButton>
              <CaretLeft size={32} color={theme.colors.gray800} />
            </IconButton>
            <Date>xjwenjhj</Date>
            <IconButton>
              <CaretRight size={32} color={theme.colors.gray800} />
            </IconButton>
          </ContainerSelector>
        </Selector>
        <VaccineCard
          batchCode="LXT2343767"
          onPress={handleTemperatureHistory}
        />
      </Container>
    </>
  )
}
