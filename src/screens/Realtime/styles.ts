import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.gray200};

  padding: 20px;
`

export const TemperatureList = styled.View`
  margin-bottom: 0px;
`

export const ChartContainer = styled.ScrollView`
  margin-bottom: 20px;
  z-index: 1;
`

export const Limiter = styled.View`
  width: 100%;
  height: 100px;
`
