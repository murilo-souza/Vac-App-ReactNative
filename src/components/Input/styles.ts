import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;

  margin-bottom: 30px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.gray800};

  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  margin-bottom: 5px;
`

export const SignInInput = styled.TextInput`
  width: 100%;

  height: ${RFValue(40)}px;

  border: 1px solid ${(props) => props.theme.colors.gray600};
  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray800};

  padding: 10px;
`
