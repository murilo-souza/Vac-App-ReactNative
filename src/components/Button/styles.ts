import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(45)}px;

  background-color: ${(props) => props.theme.blue600};

  align-items: center;
  justify-content: center;

  border-radius: 5px;
`
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;

  color: ${(props) => props.theme.white};
`
