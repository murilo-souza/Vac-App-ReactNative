import { NavigationContainer } from '@react-navigation/native'
import { AppTabRoutes } from './app.tab.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  )
}
