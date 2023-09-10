import React from 'react'
import { ChartContainer, Container, TemperatureList } from './styles'
import { TemperatureCard } from '../../components/TemperatureCard'
import { HeaderFocus } from '../../components/HeaderFocus'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { useTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native'

export function TemperatureHistory() {
  const theme = useTheme()

  const data = [
    {
      id: '1',
      temperature: 10,
      time: '12h55',
    },
    {
      id: '2',
      temperature: 15,
      time: '13h00',
    },
    {
      id: '3',
      temperature: 13,
      time: '13h05',
    },
    {
      id: '4',
      temperature: 20,
      time: '13h10',
    },
    {
      id: '5',
      temperature: 30,
      time: '13h15',
    },
    {
      id: '6',
      temperature: 27,
      time: '13h20',
    },
    {
      id: '7',
      temperature: 18,
      time: '13h20',
    },
    {
      id: '8',
      temperature: 24,
      time: '13h20',
    },
    {
      id: '9',
      temperature: 36,
      time: '13h20',
    },
    {
      id: '10',
      temperature: 8,
      time: '13h20',
    },
    {
      id: '11',
      temperature: 2,
      time: '13h20',
    },
    {
      id: '12',
      temperature: 4,
      time: '13h30',
    },
    {
      id: '13',
      temperature: 7,
      time: '13h30',
    },
    {
      id: '14',
      temperature: 50,
      time: '13h30',
    },
    {
      id: '15',
      temperature: 10,
      time: '14h30',
    },
    {
      id: '16',
      temperature: -2,
      time: '14h30',
    },
  ]

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderFocus title="LXTH421651" />
      <Container>
        <ChartContainer horizontal>
          <LineChart
            data={{
              labels: data.map((item) => {
                return item.time
              }),
              datasets: [
                {
                  data: data.map((item) => {
                    return item.temperature
                  }),
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
