import Button from "@mui/material/Button"
import { useAppDrawerContext } from "../../shared/context"

export const Home: React.FC = () => {
  const { toggleDrawerOpen } = useAppDrawerContext()

  return (
    <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
      Toggle Drawer
    </Button>
  )
}
