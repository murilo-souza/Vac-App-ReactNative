import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 100%;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};

  padding: 20px;
`
export const ContentWrapper = styled.View`
  flex-direction: row;
`

export const ImgContainer = styled.View`
  width: 70px;
  height: 70px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.blue600};

  border-radius: 5px;

  margin-right: ${RFValue(20)}px;
`
export const Border = styled.View`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.gray800};
`

export const VaccineImg = styled.Image`
  width: 50px;
  height: 50px;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.gray800};
`

export const RealTimeText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.red600};
`

export const RealTimeBox = styled.View`
  width: 100%;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.red600};

  padding: 5px;

  align-items: center;
  justify-content: center;

  margin-top: 11px;
`
