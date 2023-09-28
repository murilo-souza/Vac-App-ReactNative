/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { ActivityIndicator } from 'react-native'
import { Routes } from './src/routes'
import { DeviceContextProvider } from './src/hook/useDevice'
import { RegisterTask } from './src/services/notificationBackground'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  // useEffect(() => {
  //   RegisterTask()
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <DeviceContextProvider>
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </DeviceContextProvider>
    </ThemeProvider>
  )
}
