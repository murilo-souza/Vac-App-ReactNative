import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

import database from '@react-native-firebase/database'

interface DeviceDataProps {
  humidity: number
  temperature: number
  temperatureH: number
  timestamp: string
}

interface DeviceContextData {
  deviceData: DeviceDataProps
}

interface ContextProviderProps {
  children: ReactNode
}

export const DeviceContext = createContext({} as DeviceContextData)

export function DeviceContextProvider({ children }: ContextProviderProps) {
  const [deviceData, setDeviceData] = useState<DeviceDataProps>(
    {} as DeviceDataProps,
  )

  // useEffect(() => {
  //   const data = database()
  //     .ref('/UsersData/9ifemwpVrQSW9S6CYe6DCgcNIIf1/readings').on('value')
  // }, [])

  return (
    <DeviceContext.Provider value={{ deviceData }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevice() {
  const context = useContext(DeviceContext)
  return context
}
