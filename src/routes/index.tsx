import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages"
import { useAppDrawerContext } from "../shared/context"
import HomeIcon from "@mui/icons-material/Home"

export const AppRoutes: React.FC = () => {
  const { setDrawerOptions } = useAppDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        path: "/",
        label: "Dashboard",
        icon: <HomeIcon />
      }
    ])
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
