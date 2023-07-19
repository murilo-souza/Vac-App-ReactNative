import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface CollapseProps {
  expanded: boolean
}

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.gray200};

  padding: 20px 20px 90px 20px;
`

export const CollapseStroke = styled.View`
  border: 1px solid ${(props) => props.theme.colors.gray400};
  border-radius: 5px;
  margin-bottom: 20px;
`

export const CollapseBox = styled.TouchableOpacity<CollapseProps>`
  background-color: ${(props) => props.theme.colors.white};

  border-radius: 5px;

  padding: 8px 11px;

  ${({ expanded }) =>
    expanded &&
    css`
      background-color: ${(props) => props.theme.colors.blue600};
    `}
`

export const Wrapper = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text<CollapseProps>`
  color: ${(props) => props.theme.colors.gray800};

  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  ${({ expanded }) =>
    expanded &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}
`

export const Information = styled.Text<CollapseProps>`
  color: ${(props) => props.theme.colors.gray800};

  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  ${({ expanded }) =>
    expanded &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}
`
