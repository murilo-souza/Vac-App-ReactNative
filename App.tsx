import React from 'react'
import { Signin } from './src/screens/Signin'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  )
}
