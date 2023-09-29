import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  background-color: ${(props) => props.theme.colors.blue600};

  padding-top: ${getStatusBarHeight() + 10}px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 16px;

  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.gray50};
`
export const Flag = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.white};

  text-align: center;
`
