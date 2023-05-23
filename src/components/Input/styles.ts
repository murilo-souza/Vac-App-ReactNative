import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;

  margin-bottom: 30px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.gray800};

  font-size: ${RFValue(20)}px;

  margin-bottom: 5px;
`

export const SignInInput = styled.TextInput`
  width: 100%;

  height: ${RFValue(40)}px;

  border: 1px solid ${(props) => props.theme.gray600};
  border-radius: 5px;

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.gray800};

  padding: 10px;
`
