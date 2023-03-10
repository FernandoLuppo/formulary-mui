import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext
} from "react"
import { ThemeProvider } from "@emotion/react"
import { LightTheme, DarkTheme } from "../themes"
import type { IChildren, IThemeContextData } from "../types"
import { Box } from "@mui/system"

const context: IThemeContextData = {
  themeName: "light",
  toggleTheme: () => {}
}
const ThemeContext = createContext(context)

export const useAppThemeContext: () => IThemeContextData = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light")

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => (oldThemeName === "light" ? "dark" : "light"))
  }, [])

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme
    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
