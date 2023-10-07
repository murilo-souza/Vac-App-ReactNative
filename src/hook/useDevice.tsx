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

interface DeviceParameters {
  max_humidity: number | string
  min_humidity: number | string
  max_temperature: number | string
  min_temperature: number | string
}

interface DeviceContextData {
  deviceData: DeviceDataProps[]
  deviceParameters: DeviceParameters
  isLoading: boolean
  user: FirebaseAuthTypes.User | null
}

interface ContextProviderProps {
  children: ReactNode
}

export const DeviceContext = createContext({} as DeviceContextData)

export function DeviceContextProvider({ children }: ContextProviderProps) {
  const [deviceData, setDeviceData] = useState<DeviceDataProps[]>([])
  const [deviceParameters, setDeviceParameters] = useState<DeviceParameters>(
    {} as DeviceParameters,
  )
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
            const filteredData2 = filteredData.filter(
              (item: DeviceDataProps) => item.temperature !== -127,
            )
            const filteredData3 = filteredData2.filter(
              (item: DeviceDataProps) => item.humidity !== -1.2147483647,
            )
            const filteredData4 = filteredData3.filter(
              (item: DeviceDataProps) => item.temperatureH !== 85,
            )
            const filteredData5 = filteredData4.filter(
              (item: DeviceDataProps) => item.temperature !== -127,
            )

            const reverseData = filteredData5.reverse()
            setDeviceData(reverseData)
            setIsLoading(false)
          }
        })
    }

    if (user) {
      setIsLoading(true)
      database()
        .ref(`/UsersData/${user.uid}/properties`)
        .on('value', (snapshot) => {
          setDeviceParameters(snapshot.val())
        })
    }
  }, [user])

  return (
    <DeviceContext.Provider
      value={{ deviceData, deviceParameters, isLoading, user }}
    >
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevice() {
  const context = useContext(DeviceContext)
  return context
}
