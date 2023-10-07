import React, { ReactNode } from 'react'
import { Container, Flag, SelectorContainer, Title, Wrapper } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  title: string
  isRealTime?: boolean
  children: ReactNode
}

export function HeaderFocus({
  title,
  isRealTime = false,
  children,
}: HeaderProps) {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container isRealtime={isRealTime}>
      <Wrapper>
        <BorderlessButton onPress={handleGoBack}>
          <ArrowLeft size={32} color={theme.colors.white} />
        </BorderlessButton>
        <Title>Lote {title}</Title>
        {isRealTime && <Flag>Tempo{`\n`}real</Flag>}
      </Wrapper>
      <SelectorContainer>{children}</SelectorContainer>
    </Container>
  )
}
