import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;

  background-color: ${(props) => props.theme.colors.gray200};

  padding: 20px;
`

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  margin-bottom: 10px;
`

export const ParametersTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};
`
export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(45)}px;

  background-color: ${(props) => props.theme.colors.blue600};

  align-items: center;
  justify-content: center;

  border-radius: 5px;
`
export const ButtonTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};
  color: ${(props) => props.theme.colors.white};
`

export const Wrapper = styled.View`
  padding-bottom: 150px;
`
