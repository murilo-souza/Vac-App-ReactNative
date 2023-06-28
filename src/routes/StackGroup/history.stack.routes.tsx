import { createStackNavigator } from '@react-navigation/stack'
import { History } from '../../screens/History'
import { TemperatureHistory } from '../../screens/TemperatureHistory'

const { Navigator, Screen } = createStackNavigator()

export function HistoryStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="history" component={History} />
      <Screen name="temperatureHistory" component={TemperatureHistory} />
    </Navigator>
  )
}
