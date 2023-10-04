import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface CardProps {
  variant: 'normal' | 'problem'
  defaultColor: 'green' | 'blue'
}

export const Container = styled.View<CardProps>`
  width: 170px;
  height: ${RFValue(70)}px;

  padding: 5px;

  border-radius: 5px;

  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 20px;

  ${({ variant, defaultColor }) =>
    variant === 'normal' &&
    defaultColor === 'blue' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.gray400};
      background-color: ${(props) => props.theme.colors.blue600};
    `}

  ${({ variant, defaultColor }) =>
    variant === 'normal' &&
    defaultColor === 'green' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.gray400};
      background-color: ${(props) => props.theme.colors.green600};
    `}

  ${({ variant }) =>
    variant === 'problem' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.red600};
      background-color: ${(props) => props.theme.colors.red600};
    `}
`

export const Time = styled.Text<CardProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.white};
`

export const Temperature = styled.Text<CardProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  margin-right: 10px;

  color: ${(props) => props.theme.colors.white};
`
