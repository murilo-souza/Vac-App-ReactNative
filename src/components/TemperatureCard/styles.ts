import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(45)}px;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.gray400};

  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  background-color: ${(props) => props.theme.colors.white};

  margin-bottom: 20px;
`
export const LeftContent = styled.View`
  flex-direction: row;
  height: 100%;

  align-items: center;
`

export const Time = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.gray800};
`

export const Temperature = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.gray800};

  margin-right: 10px;
`

export const Brick = styled.View`
  height: 100%;
  width: ${RFValue(8)}px;

  background-color: ${(props) => props.theme.colors.blue600};

  margin-right: 10px;

  overflow: hidden;
`
