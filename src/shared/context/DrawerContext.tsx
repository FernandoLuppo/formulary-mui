import { createContext, useState, useCallback, useContext } from "react"
import type { IChildren, IDrawerContextData, IDrawerOptions } from "../types"

const context: IDrawerContextData = {
    isDrawerOpen: false,
    toggleDrawerOpen: () => {},
    drawerOptions: [
        {
            path: "",
            label: "",
            icon: <></>
        }
    ],
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => {}
}

const DrawerContext = createContext(context)

export const useAppDrawerContext: () => IDrawerContextData = () => {
    return useContext(DrawerContext)
}

export const AppDrawerProvider: React.FC<IChildren> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])
    const handleSetDrawerOptions = useCallback(
        (newDrawerOptions: IDrawerOptions[]) => {
            setDrawerOptions(newDrawerOptions)
        },
        []
    )

    return (
        <DrawerContext.Provider
            value={{
                isDrawerOpen,
                toggleDrawerOpen,
                drawerOptions,
                setDrawerOptions: handleSetDrawerOptions
            }}
        >
            {children}
        </DrawerContext.Provider>
    )
}
