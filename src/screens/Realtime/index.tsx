import React, { useEffect } from 'react'
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
import { FlatList, Dimensions } from 'react-native'
import { useDevice } from '../../hook/useDevice'
import { timeFormat } from '../../utils/timeFormat'
import notifee, { AndroidImportance } from '@notifee/react-native'
import { Loading } from '../../components/Loading'
import { X } from 'phosphor-react-native'

export function Realtime() {
  const theme = useTheme()
  const { deviceData, isLoading } = useDevice()

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
      if (filteredData[0].temperature > 7 || filteredData[0].temperature < 3) {
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
      <HeaderFocus title="LXTH421651" isRealTime />
      <Container>
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
                  },
                ],
              }}
              width={
                filteredData.length > 100
                  ? filteredData.slice(0, 100).length * 50
                  : filteredData.length * 50
              } // from react-native
              height={Dimensions.get('window').height / 2.7}
              getDotColor={(value) =>
                `${
                  value > 7 || value < 3
                    ? theme.colors.red600
                    : theme.colors.blue600
                }`
              }
              yAxisSuffix="°C"
              yAxisInterval={1}
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
            data={filteredData}
            keyExtractor={(item) => item.timestamp}
            renderItem={({ item }) => (
              <TemperatureCard
                temperature={item.temperature}
                time={timeFormat(item.timestamp)}
                variant={
                  item.temperature > 7 || item.temperature < 3
                    ? 'problem'
                    : 'normal'
                }
              />
            )}
            ListEmptyComponent={
              <EmptyContainer>
                <X size={30} color={theme.colors.red600} />
                <EmptyTitle>Não ha dados em tempo real</EmptyTitle>
              </EmptyContainer>
            }
          />
        </TemperatureList>
      </Container>
    </>
  )
}
