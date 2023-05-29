import React from 'react'
import { Container, LogoImg } from './styles'
import Logo from '../../assets/logoHeader.png'
import { BorderlessButton } from 'react-native-gesture-handler'
import { SignOut } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

export function HeaderHome() {
  const theme = useTheme()
  return (
    <Container>
      <LogoImg source={Logo} />
      <BorderlessButton>
        <SignOut size={32} color={theme.colors.white} />
      </BorderlessButton>
    </Container>
  )
}
