import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

interface SelectionProps {
  isActive: boolean
}

export const SelectorStroke = styled.View<SelectionProps>`
  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${(props) => props.theme.colors.white};
      border-radius: 5px;
    `}
`

export const Selector = styled(BorderlessButton)`
  padding: 5px;
`

export const TitleSelector = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.white};
`
