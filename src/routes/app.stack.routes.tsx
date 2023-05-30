import { createStackNavigator } from '@react-navigation/stack'
import { Realtime } from '../screens/Realtime'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createStackNavigator()

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Realtime" component={Realtime} />
    </Navigator>
  )
}
