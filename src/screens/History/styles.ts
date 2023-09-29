import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  padding: 20px;

  background-color: ${(props) => props.theme.colors.gray200};
`

export const Selector = styled.View`
  width: 100%;
  align-items: center;
`

export const ContainerSelector = styled.View`
  flex-direction: row;

  margin-bottom: 20px;

  align-items: center;
`

export const DateString = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.gray800};

  margin: 0 20px;
`

export const IconButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`
