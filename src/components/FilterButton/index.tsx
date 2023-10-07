import React from 'react'
import { SelectorStroke, Selector, TitleSelector } from './styles'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

type FilterButtonProps = BorderlessButtonProps & {
  isActive: boolean
  title: string
}

export function FilterButton({ isActive, title, ...rest }: FilterButtonProps) {
  return (
    <SelectorStroke isActive={isActive}>
      <Selector {...rest}>
        <TitleSelector>{title}</TitleSelector>
      </Selector>
    </SelectorStroke>
  )
}
