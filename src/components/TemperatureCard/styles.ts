import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface CardProps {
  variant: 'normal' | 'problem'
}

export const Container = styled.View<CardProps>`
  width: 100%;
  height: ${RFValue(45)}px;

  border-radius: 5px;

  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  margin-bottom: 20px;

  ${({ variant }) =>
    variant === 'normal' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.gray400};
      background-color: ${(props) => props.theme.colors.white};
    `}

  ${({ variant }) =>
    variant === 'problem' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.red600};
      background-color: ${(props) => props.theme.colors.red600};
    `}
`
export const LeftContent = styled.View`
  flex-direction: row;
  height: 100%;

  align-items: center;
`

export const Time = styled.Text<CardProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  ${({ variant }) =>
    variant === 'normal' &&
    css`
      color: ${(props) => props.theme.colors.gray800};
    `}

  ${({ variant }) =>
    variant === 'problem' &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}
`

export const Temperature = styled.Text<CardProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  margin-right: 10px;

  ${({ variant }) =>
    variant === 'normal' &&
    css`
      color: ${(props) => props.theme.colors.gray800};
    `}

  ${({ variant }) =>
    variant === 'problem' &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}
`

export const Brick = styled.View<CardProps>`
  height: 100%;
  width: ${RFValue(8)}px;

  margin-right: 10px;

  overflow: hidden;

  ${({ variant }) =>
    variant === 'normal' &&
    css`
      background-color: ${(props) => props.theme.colors.blue600};
    `}

  ${({ variant }) =>
    variant === 'problem' &&
    css`
      background-color: ${(props) => props.theme.colors.red600};
    `}
`
