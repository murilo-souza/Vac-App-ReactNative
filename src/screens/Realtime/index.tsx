import React from 'react'
import { ChartContainer, Container, Limiter, TemperatureList } from './styles'
import { TemperatureCard } from '../../components/TemperatureCard'
import { HeaderFocus } from '../../components/HeaderFocus'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export function Realtime() {
  const theme = useTheme()

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH421651" isRealTime />
      <Container>
        <ChartContainer>
          <LineChart
            data={{
              labels: ['17h30', '17h35', '17h40', '17h45', '17h45'],
              datasets: [
                {
                  data: [
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random(),
                  ],
                },
              ],
            }}
            width={RFValue(360)} // from react-native
            height={220}
            yAxisSuffix="°C"
            yAxisInterval={1} // optional, defaults to 1
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
          <TemperatureCard />
          <TemperatureCard />
          <TemperatureCard />
          <TemperatureCard />
          <TemperatureCard />
        </TemperatureList>
      </Container>
    </>
  )
}
