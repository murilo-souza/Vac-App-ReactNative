import React, { useState } from 'react'
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
import { FilterButton } from '../../components/FilterButton'
import { HumidityCard } from '../../components/HumidityCard'

interface RouteParams {
  selectedDate: Date
}

export function TemperatureHistory() {
  const theme = useTheme()
  const { deviceData, isLoading, deviceParameters } = useDevice()

  const [changeKindOfData, setChangeKindOfData] = useState<
    'temperature' | 'humidity'
  >('temperature')

  const route = useRoute()
  const { selectedDate } = route.params as RouteParams

  const filteredData = deviceData.filter((item) => {
    const timestampNumber = parseInt(item.timestamp, 10)
    const dateUTC = new Date(timestampNumber * 1000)

    return (
      dateUTC.getDate() === selectedDate.getDate() &&
      dateUTC.getMonth() === selectedDate.getMonth() &&
      dateUTC.getFullYear() === selectedDate.getFullYear()
    )
  })

  if (isLoading && !filteredData) {
    return <Loading />
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH42165111">
        <FilterButton
          title="Temperatura"
          isActive={changeKindOfData === 'temperature'}
          onPress={() => setChangeKindOfData('temperature')}
        />
        <FilterButton
          title="Umidade"
          isActive={changeKindOfData === 'humidity'}
          onPress={() => setChangeKindOfData('humidity')}
        />
      </HeaderFocus>
      <Container>
        {changeKindOfData === 'temperature' ? (
          <>
            {filteredData.length > 3 ? (
              <ChartContainer horizontal>
                <LineChart
                  data={{
                    labels: filteredData.slice(0, 100).map((item) => {
                      return timeFormat(item.timestamp)
                    }),
                    datasets: [
                      {
                        data: filteredData.slice(0, 100).map((item) => {
                          return item.temperature
                        }),
                        color: () => `${theme.colors.blue600}`,
                      },
                      {
                        data: filteredData.slice(0, 100).map((item) => {
                          return item.temperatureH
                        }),
                        color: () => `${theme.colors.green600}`,
                      },
                    ],
                  }}
                  width={
                    filteredData.length > 100
                      ? filteredData.slice(0, 100).length * 50
                      : filteredData.length * 100
                  } // from react-native
                  height={Dimensions.get('window').height / 2.7}
                  getDotColor={(value) =>
                    `${
                      value > Number(deviceParameters.max_temperature) - 1 ||
                      value < Number(deviceParameters.min_temperature) + 1
                        ? theme.colors.red600
                        : theme.colors.gray400
                    }`
                  }
                  yAxisSuffix="°C"
                  yAxisInterval={1}
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
                data={filteredData}
                keyExtractor={(item) => item.timestamp}
                renderItem={({ item }) => (
                  <CardContainer>
                    <TemperatureCard
                      temperature={item.temperatureH}
                      time={timeFormat(item.timestamp)}
                      defaultColor="green"
                      variant={
                        item.temperature >
                          Number(deviceParameters.max_temperature) - 1 ||
                        item.temperature <
                          Number(deviceParameters.min_temperature) + 1
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
                          Number(deviceParameters.max_temperature) - 1 ||
                        item.temperature <
                          Number(deviceParameters.min_temperature) + 1
                          ? 'problem'
                          : 'normal'
                      }
                    />
                  </CardContainer>
                )}
                ListEmptyComponent={
                  <EmptyContainer>
                    <X size={30} color={theme.colors.red600} />
                    <EmptyTitle>Não ha dados em tempo real</EmptyTitle>
                  </EmptyContainer>
                }
              />
            </TemperatureList>
          </>
        ) : (
          <>
            {filteredData.length > 3 ? (
              <ChartContainer horizontal>
                <LineChart
                  data={{
                    labels: filteredData.slice(0, 100).map((item) => {
                      return timeFormat(item.timestamp)
                    }),
                    datasets: [
                      {
                        data: filteredData.slice(0, 100).map((item) => {
                          return item.humidity
                        }),
                        color: () => `${theme.colors.blue600}`,
                      },
                    ],
                  }}
                  width={
                    filteredData.length > 100
                      ? filteredData.slice(0, 100).length * 50
                      : filteredData.length * 100
                  } // from react-native
                  height={Dimensions.get('window').height / 2.7}
                  getDotColor={(value) =>
                    `${
                      value > Number(deviceParameters.max_humidity) - 10 ||
                      value < Number(deviceParameters.min_humidity) + 10
                        ? theme.colors.red600
                        : theme.colors.gray400
                    }`
                  }
                  yAxisSuffix="%"
                  yAxisInterval={1}
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
                data={filteredData}
                keyExtractor={(item) => item.timestamp}
                renderItem={({ item }) => (
                  <CardContainer>
                    <HumidityCard
                      temperature={item.humidity}
                      time={timeFormat(item.timestamp)}
                      variant={
                        item.humidity >
                          Number(deviceParameters.max_humidity) - 10 ||
                        item.humidity <
                          Number(deviceParameters.min_humidity) + 10
                          ? 'problem'
                          : 'normal'
                      }
                    />
                  </CardContainer>
                )}
                ListEmptyComponent={
                  <EmptyContainer>
                    <X size={30} color={theme.colors.red600} />
                    <EmptyTitle>Não ha dados em tempo real</EmptyTitle>
                  </EmptyContainer>
                }
              />
            </TemperatureList>
          </>
        )}
      </Container>
    </>
  )
}
