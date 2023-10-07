import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.gray200};

  padding: 20px;
`

export const TemperatureList = styled.View`
  margin-bottom: 0px;

  height: 335px;

  padding-bottom: 60px;
`

export const ChartContainer = styled.ScrollView`
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.white};
`
export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;

  padding-top: 20px;
`

export const EmptyTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.gray800};
`
export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
