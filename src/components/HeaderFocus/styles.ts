import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface SizeProps {
  isRealtime: boolean
}

export const Container = styled.View<SizeProps>`
  width: 100%;

  background-color: ${(props) => props.theme.colors.blue600};

  ${({ isRealtime }) =>
    isRealtime === true &&
    css`
      padding-top: ${getStatusBarHeight() + 5}px;
    `}

  ${({ isRealtime }) =>
    isRealtime === false &&
    css`
      padding-top: ${getStatusBarHeight() + 25}px;
    `}

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
