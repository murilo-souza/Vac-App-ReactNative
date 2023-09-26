import React, { useState } from 'react'
import { Container, LogoImg } from './styles'
import Logo from '../../assets/logoHeader.png'
import { BorderlessButton } from 'react-native-gesture-handler'
import { SignOut } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import auth from '@react-native-firebase/auth'

export function HeaderHome() {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)

  function handleSignOut() {
    auth().signOut()
  }

  return (
    <Container>
      <LogoImg source={Logo} />
      <BorderlessButton onPress={handleSignOut}>
        <SignOut size={32} color={theme.colors.white} />
      </BorderlessButton>
    </Container>
  )
}
