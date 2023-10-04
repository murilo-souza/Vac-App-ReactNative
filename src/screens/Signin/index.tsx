import React, { useState } from 'react'
import {
  ButtonContainer,
  Container,
  Logo,
  LogoContainer,
  Title,
} from './styles'
import LogoPng from '../../assets/logo.png'
import { Input } from '../../components/Input'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { StatusBar } from 'expo-status-bar'

export function Signin() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleHome() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha')
    }
    setIsLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
        if (
          error.code === 'auth/invalid-email' ||
          error.code === 'auth/wrong-password'
        ) {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }
        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }
        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
  }

  return (
    <>
      <StatusBar translucent style="dark" />
      <Container>
        <LogoContainer>
          <Logo source={LogoPng} />
        </LogoContainer>
        <Input
          title="E-mail"
          placeholder="vac@example.com"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <Input
          title="Senha"
          placeholder="***********"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
        />
        <ButtonContainer onPress={handleHome} disabled={isLoading}>
          <Title>Entrar</Title>
        </ButtonContainer>
      </Container>
    </>
  )
}
