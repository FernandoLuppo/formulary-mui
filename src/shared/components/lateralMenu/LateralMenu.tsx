import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { Box } from "@mui/system"
import type { IChildren } from "../../types"
import { useAppDrawerContext } from "../../context"

export const LateralMenu: React.FC<IChildren> = ({ children }) => {
  const { isDrawerOpen, toggleDrawerOpen } = useAppDrawerContext()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            height={theme.spacing(20)}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt="User Photo"
              src={require("../../images/Fernando.png")}
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
