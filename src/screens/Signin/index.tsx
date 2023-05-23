import React from 'react'
import { Container, Logo, LogoContainer } from './styles'
import LogoPng from '../../assets/logo.png'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Signin() {
  return (
    <Container>
      <LogoContainer>
        <Logo source={LogoPng} />
      </LogoContainer>
      <Input title="E-mail" placeholder="vac@example.com" />
      <Input title="Senha" placeholder="***********" secureTextEntry />
      <Button title="Entrar" />
    </Container>
  )
}
