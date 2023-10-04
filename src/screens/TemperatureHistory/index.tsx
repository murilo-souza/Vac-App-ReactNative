import React from 'react'
import {
  CardContainer,
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
import { FlatList, Dimensions } from 'react-native'
import { useDevice } from '../../hook/useDevice'
import { useRoute } from '@react-navigation/native'
import { timeFormat } from '../../utils/timeFormat'
import { X } from 'phosphor-react-native'
import { Loading } from '../../components/Loading'

interface RouteParams {
  selectedDate: Date
}

export function TemperatureHistory() {
  const theme = useTheme()
  const { deviceData, isLoading, deviceProps } = useDevice()

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

  if (isLoading && !filteredDate) {
    return <Loading />
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH42165111" />
      <Container>
        {filteredDate.length > 3 ? (
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
                    color: () => `${theme.colors.blue600}`,
                  },
                  {
                    data: filteredDate.slice(0, 100).map((item) => {
                      return item.temperatureH
                    }),
                    color: () => `${theme.colors.green600}`,
                  },
                ],
              }}
              width={
                filteredDate.length > 100
                  ? filteredDate.slice(0, 100).length * 50
                  : filteredDate.length * 100
              } // from react-native
              height={Dimensions.get('window').height / 2.7}
              yAxisSuffix="°C"
              yAxisInterval={1}
              getDotColor={(value2) =>
                `${
                  (value2 > Number(deviceProps.max_temperature) - 1 ||
                    value2 < Number(deviceProps.min_temperature) + 1) &&
                  theme.colors.red600
                }`
              }
              chartConfig={{
                backgroundColor: theme.colors.white,
                backgroundGradientFrom: theme.colors.white,
                backgroundGradientTo: theme.colors.white,
                color: () => `${theme.colors.gray500}`,
                labelColor: () => `${theme.colors.gray800}`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
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
              <CardContainer>
                <TemperatureCard
                  temperature={item.temperatureH}
                  time={timeFormat(item.timestamp)}
                  defaultColor="green"
                  variant={
                    item.temperature >
                      Number(deviceProps.max_temperature) - 1 ||
                    item.temperature < Number(deviceProps.min_temperature) + 1
                      ? 'problem'
                      : 'normal'
                  }
                />
                <TemperatureCard
                  temperature={item.temperature}
                  defaultColor="blue"
                  time={timeFormat(item.timestamp)}
                  variant={
                    item.temperature >
                      Number(deviceProps.max_temperature) - 1 ||
                    item.temperature < Number(deviceProps.min_temperature) + 1
                      ? 'problem'
                      : 'normal'
                  }
                />
              </CardContainer>
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
