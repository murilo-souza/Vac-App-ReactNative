import React, { useState } from 'react'
import { Container, LogoImg } from './styles'
import Logo from '../../assets/logoHeader.png'
import { SignOut } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import auth from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native'

export function HeaderHome() {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)

  function handleSignOut() {
    setLoading(true)
    auth().signOut()
  }

  return (
    <Container>
      <LogoImg source={Logo} />
      <TouchableOpacity onPress={handleSignOut} disabled={loading}>
        <SignOut size={32} color={theme.colors.white} />
      </TouchableOpacity>
    </Container>
  )
}
