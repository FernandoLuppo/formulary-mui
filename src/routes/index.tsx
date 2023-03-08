import { ThemeProvider } from "@emotion/react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages"
import { LightTheme } from "../shared/themes"

export const AppRoutes: React.FC = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/página-inicial" element={<Home />} />

          <Route path="/*" element={<Navigate to="/página-inicial" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
