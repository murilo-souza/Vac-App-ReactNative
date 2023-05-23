import React from 'react'
import { Container, SignInInput, Title } from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  title: string
}

export function Input({ title, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SignInInput {...rest} />
    </Container>
  )
}
