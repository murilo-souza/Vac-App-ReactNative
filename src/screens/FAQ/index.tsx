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
import { FlatList } from 'react-native'

export function FAQ() {
  const [collapsed, setCollapsed] = useState(true)
  const theme = useTheme()

  const data = [
    {
      id: '1',
      title: 'Question 1',
      information:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis soluta unde fugiat eum, quis voluptatibus id aliquam est impedit ex repudiandae hic quo fugit perferendis sunt vel officiis obcaecati odio.',
    },
    {
      id: '2',
      title: 'Question 2',
      information:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis soluta unde fugiat eum, quis voluptatibus id aliquam est impedit ex repudiandae hic quo fugit perferendis sunt vel officiis obcaecati odio.',
    },
    {
      id: '3',
      title: 'Question 3',
      information:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis soluta unde fugiat eum, quis voluptatibus id aliquam est impedit ex repudiandae hic quo fugit perferendis sunt vel officiis obcaecati odio.',
    },
    {
      id: '4',
      title: 'Question 4',
      information:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis soluta unde fugiat eum, quis voluptatibus id aliquam est impedit ex repudiandae hic quo fugit perferendis sunt vel officiis obcaecati odio.',
    },
  ]

  function handleCollapse() {
    setCollapsed(!collapsed)
    console.log(collapsed)
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CollapseStroke>
              <CollapseBox onPress={handleCollapse} expanded={!collapsed}>
                <Wrapper>
                  <Title expanded={!collapsed}>{item.title}</Title>
                  <CaretDown
                    size={32}
                    color={
                      collapsed ? theme.colors.gray800 : theme.colors.white
                    }
                  />
                </Wrapper>
                <Collapsible collapsed={collapsed}>
                  <Information expanded={!collapsed}>
                    {item.information}
                  </Information>
                </Collapsible>
              </CollapseBox>
            </CollapseStroke>
          )}
        />
      </Container>
    </>
  )
}
