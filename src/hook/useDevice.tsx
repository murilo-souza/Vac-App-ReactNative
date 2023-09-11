import { useContext, createContext, ReactNode, useState } from 'react'

interface DeviceContextData {
  temperatureEx: number[]
}

interface ContextProviderProps {
  children: ReactNode
}

export const DeviceContext = createContext({} as DeviceContextData)

export function DeviceContextProvider({ children }: ContextProviderProps) {
  const [temperatureEx, setTemperatureEx] = useState([])

  return (
    <DeviceContext.Provider value={{ temperatureEx }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDevice() {
  const context = useContext(DeviceContext)
  return context
}
