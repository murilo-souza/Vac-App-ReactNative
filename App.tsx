/* eslint-disable camelcase */
import React from 'react'
// import { Signin } from './src/screens/Signin'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { ActivityIndicator } from 'react-native'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
