import React from 'react'
import { ChartContainer, Container, TemperatureList } from './styles'
import { TemperatureCard } from '../../components/TemperatureCard'
import { HeaderFocus } from '../../components/HeaderFocus'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native'
import { useDevice } from '../../hook/useDevice'
import { timeFormat } from '../../utils/timeFormat'

export function Realtime() {
  const theme = useTheme()
  const { deviceData } = useDevice()

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH421651" isRealTime />
      <Container>
        <ChartContainer horizontal>
          <LineChart
            data={{
              labels: deviceData.slice(0, 100).map((item) => {
                return timeFormat(item.timestamp)
              }),
              datasets: [
                {
                  data: deviceData.slice(0, 100).map((item) => {
                    return item.temperature
                  }),
                },
              ],
            }}
            width={RFValue(deviceData.slice(0, 100).length * 50)} // from react-native
            height={220}
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
        <TemperatureList>
          <FlatList
            data={deviceData}
            keyExtractor={(item) => item.timestamp}
            renderItem={({ item }) => (
              <TemperatureCard
                temperature={item.temperature}
                time={timeFormat(item.timestamp)}
              />
            )}
          />
        </TemperatureList>
      </Container>
    </>
  )
}
