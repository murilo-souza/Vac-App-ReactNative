import React from 'react'
import {
  ChartContainer,
  Container,
  EmptyContainer,
  EmptyTitle,
  TemperatureList,
} from './styles'
import { TemperatureCard } from '../../components/TemperatureCard'
import { HeaderFocus } from '../../components/HeaderFocus'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from 'styled-components/native'
import { FlatList } from 'react-native'
import { useDevice } from '../../hook/useDevice'
import { useRoute } from '@react-navigation/native'
import { timeFormat } from '../../utils/timeFormat'
import { X } from 'phosphor-react-native'

interface RouteParams {
  selectedDate: Date
}

export function TemperatureHistory() {
  const theme = useTheme()
  const { deviceData } = useDevice()
  const route = useRoute()
  const { selectedDate } = route.params as RouteParams

  const filteredDate = deviceData.filter((item) => {
    const timestampNumber = parseInt(item.timestamp, 10)
    const dateUTC = new Date(timestampNumber * 1000)

    return (
      dateUTC.getDate() === selectedDate.getDate() &&
      dateUTC.getMonth() === selectedDate.getMonth() &&
      dateUTC.getFullYear() === selectedDate.getFullYear()
    )
  })

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH421651" />
      <Container>
        {filteredDate.length !== 0 ? (
          <ChartContainer horizontal>
            <LineChart
              data={{
                labels: filteredDate.slice(0, 100).map((item) => {
                  return timeFormat(item.timestamp)
                }),
                datasets: [
                  {
                    data: filteredDate.slice(0, 100).map((item) => {
                      return item.temperature
                    }),
                  },
                ],
              }}
              width={
                filteredDate.length > 100
                  ? filteredDate.slice(0, 100).length * 50
                  : filteredDate.length * 100
              } // from react-native
              height={220}
              yAxisSuffix="°C"
              yAxisInterval={1}
              getDotColor={(value) =>
                `${value < 28.06 ? theme.colors.red600 : theme.colors.blue600}`
              }
              chartConfig={{
                backgroundColor: theme.colors.white,
                backgroundGradientFrom: theme.colors.white,
                backgroundGradientTo: theme.colors.white,
                decimalPlaces: 1, // optional, defaults to 2dp
                color: () => `${theme.colors.blue600}`,
                labelColor: () => `${theme.colors.gray800}`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: theme.colors.gray200,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 5,
              }}
            />
          </ChartContainer>
        ) : (
          <></>
        )}
        <TemperatureList>
          <FlatList
            data={filteredDate}
            keyExtractor={(item) => item.timestamp}
            renderItem={({ item }) => (
              <TemperatureCard
                temperature={item.temperature}
                time={timeFormat(item.timestamp)}
                variant={item.temperature < 28.06 ? 'problem' : 'normal'}
              />
            )}
            ListEmptyComponent={
              <EmptyContainer>
                <X size={30} color={theme.colors.red600} />
                <EmptyTitle>Não ha dados nesse dia</EmptyTitle>
              </EmptyContainer>
            }
          />
        </TemperatureList>
      </Container>
    </>
  )
}
