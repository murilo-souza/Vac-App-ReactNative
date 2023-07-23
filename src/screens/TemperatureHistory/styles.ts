import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.gray200};

  padding: 20px;
`

export const TemperatureList = styled.View`
  margin-bottom: 0px;

  height: 380px;

  padding-bottom: 60px;
`

export const ChartContainer = styled.ScrollView`
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.white};
`
