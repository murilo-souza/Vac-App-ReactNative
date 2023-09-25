import React, { useState, useEffect } from 'react'
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
import firestore from '@react-native-firebase/firestore'

type QuestionProps = {
  id: string
  title: string
  information: string
}

export function FAQ() {
  const theme = useTheme()
  const [expandedItems, setExpandedItems] = useState([])
  const [questions, setQuestion] = useState<QuestionProps[]>([])

  const toggleItem = (itemId: string) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId))
    } else {
      setExpandedItems([...expandedItems, itemId])
    }
  }

  useEffect(() => {
    const question = firestore()
      .collection('FAQ')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { title, information } = doc.data()
          return {
            id: doc.id,
            title,
            information,
          }
        })
        setQuestion(data)
      })
    return question
  }, [])

  return (
    <>
      <StatusBar translucent style="light" />
      <HeaderHome />
      <Container>
        <FlatList
          data={questions}
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
