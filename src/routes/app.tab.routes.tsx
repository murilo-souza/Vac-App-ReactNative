import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { useTheme } from 'styled-components/native'
import { CircleWavyQuestion, House, Notepad } from 'phosphor-react-native'
import { AppStackRoutes } from './app.stack.routes'
import { IconContainer } from './styles'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarBadgeStyle: {
          backgroundColor: theme.colors.red600,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray500,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          height: 70,
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 25,
          borderRadius: 15,
        },
      }}
    >
      <Screen
        name="History"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <IconContainer>
                  <Notepad size={32} color={color} />
                </IconContainer>
              ) : (
                <Notepad size={32} color={color} />
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <IconContainer>
                  <House size={32} color={color} />
                </IconContainer>
              ) : (
                <House size={32} color={color} />
              )}
            </>
          ),
        }}
      />
      <Screen
        name="Questions"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <IconContainer>
                  <CircleWavyQuestion size={32} color={color} />
                </IconContainer>
              ) : (
                <CircleWavyQuestion size={32} color={color} />
              )}
            </>
          ),
        }}
      />
    </Navigator>
  )
}
