import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

import database from '@react-native-firebase/database'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

interface DeviceDataProps {
  humidity: number
  temperature: number
  temperatureH: number
  timestamp: string
}

interface DeviceContextData {
  deviceData: DeviceDataProps[]
  isLoading: boolean
  user: FirebaseAuthTypes.User | null
}

interface ContextProviderProps {
  children: ReactNode
}

export const DeviceContext = createContext({} as DeviceContextData)

export function DeviceContextProvider({ children }: ContextProviderProps) {
  const [deviceData, setDeviceData] = useState<DeviceDataProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>()

  useEffect(() => {
    auth().onAuthStateChanged((response) => {
      setUser(response)
    })

    if (user) {
      setIsLoading(true)
      database()
        .ref(`/UsersData/${user.uid}/readings`)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const dataArray = []
            snapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val()
              dataArray.push({ ...data })
              return data
            })
            const filteredData = dataArray.filter(
              (item: DeviceDataProps) => item.temperature !== 85,
            )
            const reverseData = filteredData.reverse()
            setDeviceData(reverseData)
            setIsLoading(false)
          }
        })
    }
  }, [user])

  return (
    <DeviceContext.Provider value={{ deviceData, isLoading, user }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevice() {
  const context = useContext(DeviceContext)
  return context
}
