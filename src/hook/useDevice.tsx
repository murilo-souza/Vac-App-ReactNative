import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

import database from '@react-native-firebase/database'
// import auth from '@react-native-firebase/auth'

interface DeviceDataProps {
  humidity: number
  temperature: number
  temperatureH: number
  timestamp: string
}

interface DeviceContextData {
  deviceData: DeviceDataProps[]
  isLoading: boolean
}

interface ContextProviderProps {
  children: ReactNode
}

export const DeviceContext = createContext({} as DeviceContextData)

export function DeviceContextProvider({ children }: ContextProviderProps) {
  const [deviceData, setDeviceData] = useState<DeviceDataProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // if (auth().currentUser.uid) {
    setIsLoading(true)
    database()
      .ref('/UsersData/9ifemwpVrQSW9S6CYe6DCgcNIIf1/readings')
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
    // }
  }, [])

  return (
    <DeviceContext.Provider value={{ deviceData, isLoading }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevice() {
  const context = useContext(DeviceContext)
  return context
}
