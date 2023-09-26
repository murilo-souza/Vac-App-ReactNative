import { NavigationContainer } from '@react-navigation/native'
import { AppTabRoutes } from './app.tab.routes'
import { useState, useEffect } from 'react'
import { Signin } from '../screens/Signin'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { Loading } from '../components/Loading'

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response)
      setIsLoading(false)
    })

    return subscriber
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {user ? <AppTabRoutes /> : <Signin />}
    </NavigationContainer>
  )
}
