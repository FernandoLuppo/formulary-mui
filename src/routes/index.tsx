import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/página-inicial" element={<Home />} />

                <Route path="/*" element={<Navigate to="/página-inicial" />} />
            </Routes>
        </BrowserRouter>
    )
}