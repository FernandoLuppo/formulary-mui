import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages"

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/página-inicial" element={<Home />} />

      <Route path="/*" element={<Navigate to="/página-inicial" />} />
    </Routes>
  )
}
