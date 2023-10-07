import React, { useEffect, useState } from 'react'
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
import { timeFormat } from '../../utils/timeFormat'
import notifee, { AndroidImportance } from '@notifee/react-native'
import { Loading } from '../../components/Loading'
import { X } from 'phosphor-react-native'
import { FilterButton } from '../../components/FilterButton'

export function Realtime() {
  const theme = useTheme()
  const { deviceData, isLoading, deviceParameters } = useDevice()
  const [changeKindOfData, setChangeKindOfData] = useState<
    'temperature' | 'humidity'
  >('temperature')

  const currentDate = new Date(Date.now())
  const filteredData = deviceData.filter((item) => {
    const timestampNumber = parseInt(item.timestamp, 10)
    const dateUTC = new Date(timestampNumber * 1000)

    return (
      dateUTC.getDate() === currentDate.getDate() &&
      dateUTC.getMonth() === currentDate.getMonth() &&
      dateUTC.getFullYear() === currentDate.getFullYear()
    )
  })

  async function displayNotifications() {
    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
      id: 'Warning',
      name: 'Temperature',
      vibration: true,
      importance: AndroidImportance.HIGH,
    })

    await notifee.displayNotification({
      id: '7',
      title: 'Temperatura próxima do <strong>limite</strong>',
      body: '<strong>Verificar a câmara de conservação</strong>, temperatura próxima do limite seguro',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    })
  }

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    if (filteredData.length !== 0) {
      if (
        filteredData[0].temperature >
          Number(deviceParameters.max_temperature) - 1 ||
        filteredData[0].temperature <
          Number(deviceParameters.min_temperature) + 1
      ) {
        displayNotifications()
      }
    }
  }, [filteredData])

  if (isLoading && !filteredData) {
    return <Loading />
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH421651" isRealTime>
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
                    <TemperatureCard
                      temperature={item.humidity}
                      time={timeFormat(item.timestamp)}
                      defaultColor="green"
                      variant={
                        item.temperature >
                          Number(deviceParameters.max_humidity) - 10 ||
                        item.temperature <
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
