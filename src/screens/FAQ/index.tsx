import React, { useState } from 'react'
import {
  CollapseBox,
  CollapseStroke,
  Container,
  Information,
  Title,
  Wrapper,
} from './styles'
import { StatusBar } from 'expo-status-bar'
import { HeaderHome } from '../../components/HeaderHome'
import { CaretDown } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import Collapsible from 'react-native-collapsible'

export function FAQ() {
  const [collapse, setCollapse] = useState(true)
  const theme = useTheme()

  function handleCollapse() {
    setCollapse(!collapse)
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <CollapseStroke>
          <CollapseBox onPress={handleCollapse} expanded={!collapse}>
            <Wrapper>
              <Title expanded={!collapse}>Question</Title>
              <CaretDown
                size={32}
                color={collapse ? theme.colors.gray800 : theme.colors.white}
              />
            </Wrapper>
            <Collapsible collapsed={collapse}>
              <Information expanded={!collapse}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                nisi et reprehenderit deleniti perspiciatis culpa esse inventore
                nesciunt nam magni molestias, qui, iure ab accusantium tenetur
                doloremque! Tempora, cumque enim.
              </Information>
            </Collapsible>
          </CollapseBox>
        </CollapseStroke>
      </Container>
    </>
  )
}
