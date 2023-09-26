import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.gray200};

  padding: 20px 20px 0 20px;
`
