import { createStackNavigator } from '@react-navigation/stack'
import { Realtime } from '../screens/Realtime'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createStackNavigator()

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="realtime" component={Realtime} />
    </Navigator>
  )
}
