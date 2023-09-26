import React, { useState } from 'react'
import {
  Container,
  ContainerSelector,
  DateString,
  IconButton,
  Selector,
} from './styles'
import { useTheme } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { HeaderHome } from '../../components/HeaderHome'
import { VaccineCard } from '../../components/VaccineCard'
import { useNavigation } from '@react-navigation/native'
import { dateFormat } from '../../utils/dateFormat'
import { CaretLeft, CaretRight } from 'phosphor-react-native'
import { addDays, subDays } from 'date-fns'

export function History() {
  const theme = useTheme()
  const navigation = useNavigation()

  const [selectedDate, setSelectedDate] = useState(new Date())

  function handleTemperatureHistory(selectedDate: Date) {
    navigation.navigate('temperatureHistory', { selectedDate })
  }

  function handleDateChange(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addDays(selectedDate, 1))
    } else {
      setSelectedDate(subDays(selectedDate, 1))
    }
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <Selector>
          <ContainerSelector>
            <IconButton onPress={() => handleDateChange('prev')}>
              <CaretLeft size={32} color={theme.colors.gray800} />
            </IconButton>
            <DateString>{dateFormat(selectedDate)}</DateString>
            <IconButton onPress={() => handleDateChange('next')}>
              <CaretRight size={32} color={theme.colors.gray800} />
            </IconButton>
          </ContainerSelector>
        </Selector>
        <VaccineCard
          batchCode="LXT2343767"
          onPress={() => handleTemperatureHistory(selectedDate)}
        />
      </Container>
    </>
  )
}
