import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 26px;

  background-color: ${(props) => props.theme.colors.gray200};
`

export const Logo = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
`

export const LogoContainer = styled.View`
  background-color: ${(props) => props.theme.colors.blue600};

  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;

  align-items: center;
  justify-content: center;

  border-radius: 5px;

  margin-bottom: 80px;
`
