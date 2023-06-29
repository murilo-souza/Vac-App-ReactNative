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

  const [expandedItems, setExpandedItems] = useState([])

  // Função para manipular a expansão ou colapso de um item
  const toggleItem = (itemId: string) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId))
    } else {
      setExpandedItems([...expandedItems, itemId])
    }
  }

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

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isExpanded = expandedItems.includes(item.id)

            return (
              <CollapseStroke>
                <CollapseBox
                  onPress={() => toggleItem(item.id)}
                  expanded={isExpanded}
                >
                  <Wrapper>
                    <Title expanded={isExpanded}>{item.title}</Title>
                    <CaretDown
                      size={32}
                      color={
                        !isExpanded ? theme.colors.gray800 : theme.colors.white
                      }
                    />
                  </Wrapper>
                  <Collapsible collapsed={!isExpanded}>
                    <Information expanded={isExpanded}>
                      {item.information}
                    </Information>
                  </Collapsible>
                </CollapseBox>
              </CollapseStroke>
            )
          }}
        />
      </Container>
    </>
  )
}
