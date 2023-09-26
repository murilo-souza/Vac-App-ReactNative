import { NavigationContainer } from '@react-navigation/native'
import { AppTabRoutes } from './app.tab.routes'
import { useState } from 'react'
import { Signin } from '../screens/Signin'

export function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <NavigationContainer>
      {!isLoggedIn ? <Signin /> : <AppTabRoutes />}
    </NavigationContainer>
  )
}
