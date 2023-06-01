import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;

  margin-bottom: 20px;

  align-items: center;
`

export const Date = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.gray800};

  margin: 0 20px;
`

export const IconButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`
