import { createContext, useState, useCallback, useContext } from "react"
import type { IChildren, IDrawerContextData } from "../types"

const context: IDrawerContextData = {
  isDrawerOpen: false,
  toggleDrawerOpen: () => {}
}
const DrawerContext = createContext(context)
console.log(DrawerContext)

export const useAppDrawerContext: () => IDrawerContextData = () => {
  return useContext(DrawerContext)
}

export const AppDrawerProvider: React.FC<IChildren> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
