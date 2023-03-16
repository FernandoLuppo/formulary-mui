import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { CityList, Dashboard } from "../pages"
import { useAppDrawerContext } from "../shared/context"
import HomeIcon from "@mui/icons-material/Home"
import LocationCityIcon from "@mui/icons-material/LocationCity"

export const AppRoutes: React.FC = () => {
    const { setDrawerOptions } = useAppDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                path: "/",
                label: "Dashboard",
                icon: <HomeIcon />
            },
            {
                path: "/cities",
                label: "Cities",
                icon: <LocationCityIcon />
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cities" element={<CityList />} />
            {/* <Route path="/cities/details/:id" element={<Dashboard />} /> */}

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
