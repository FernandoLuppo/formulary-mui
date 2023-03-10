import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { LateralMenu } from "./shared/components"
import { AppDrawerProvider, AppThemeProvider } from "./shared/context"

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <LateralMenu>
            <AppRoutes />
          </LateralMenu>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  )
}
