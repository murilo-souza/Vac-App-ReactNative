import React from 'react'
import { ChartContainer, Container, TemperatureList } from './styles'
import { TemperatureCard } from '../../components/TemperatureCard'
import { HeaderFocus } from '../../components/HeaderFocus'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native'

export function Realtime() {
  const theme = useTheme()

  const data = [
    {
      id: '1',
      temperature: 10,
      time: '12h55',
    },
    {
      id: '2',
      temperature: 10,
      time: '13h00',
    },
    {
      id: '3',
      temperature: 10,
      time: '13h05',
    },
    {
      id: '4',
      temperature: 10,
      time: '13h10',
    },
    {
      id: '5',
      temperature: 10,
      time: '13h15',
    },
    {
      id: '6',
      temperature: 10,
      time: '13h20',
    },
    {
      id: '7',
      temperature: 10,
      time: '13h20',
    },
    {
      id: '8',
      temperature: 10,
      time: '13h20',
    },
    {
      id: '9',
      temperature: 10,
      time: '13h20',
    },
    {
      id: '10',
      temperature: 10,
      time: '13h20',
    },
    {
      id: '11',
      temperature: 10,
      time: '13h20',
    },
    {
      id: '12',
      temperature: 10,
      time: '13h30',
    },
    {
      id: '13',
      temperature: 10,
      time: '13h30',
    },
    {
      id: '14',
      temperature: 10,
      time: '13h30',
    },
    {
      id: '15',
      temperature: 10,
      time: '14h30',
    },
  ]

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH421651" isRealTime />
      <Container>
        <ChartContainer horizontal>
          <LineChart
            data={{
              labels: data.map((item) => {
                return item.time
              }),
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
            width={RFValue(data.length * 100)} // from react-native
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
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TemperatureCard
                temperature={item.temperature}
                time={item.time}
              />
            )}
          />
        </TemperatureList>
      </Container>
    </>
  )
}
