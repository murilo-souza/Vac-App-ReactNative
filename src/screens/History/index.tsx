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
import { Loading } from '../../components/Loading'

export function History() {
  const theme = useTheme()
  const navigation = useNavigation()
  const [isLoading, setLoading] = useState(false)

  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()))

  function handleTemperatureHistory(selectedDate: Date) {
    setLoading(true)
    navigation.navigate('temperatureHistory', { selectedDate })
    setLoading(false)
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
            <IconButton
              onPress={() => handleDateChange('next')}
              enabled={
                selectedDate.getDate().toString() !==
                new Date(Date.now()).getDate().toString()
              }
            >
              <CaretRight
                size={32}
                color={
                  selectedDate.getDate().toString() !==
                  new Date(Date.now()).getDate().toString()
                    ? theme.colors.gray800
                    : theme.colors.gray400
                }
              />
            </IconButton>
          </ContainerSelector>
        </Selector>
        <VaccineCard
          batchCode="LXT2343767"
          onPress={() => handleTemperatureHistory(selectedDate)}
          enabled={!isLoading}
        />
        {isLoading && <Loading />}
      </Container>
    </>
  )
}
