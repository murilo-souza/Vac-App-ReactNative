import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  background-color: ${(props) => props.theme.colors.blue600};

  padding-top: ${getStatusBarHeight().toFixed(0)};
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 16px;

  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`
export const LogoImg = styled.Image``
