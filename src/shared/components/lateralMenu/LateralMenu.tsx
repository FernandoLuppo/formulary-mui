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
import { Box } from "@mui/system"
import type { IChildren } from "../../types"
import { useAppDrawerContext, useAppThemeContext } from "../../context"
import { ListItemLink } from "./components"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import Brightness3Icon from "@mui/icons-material/Brightness3"

export const LateralMenu: React.FC<IChildren> = ({ children }) => {
    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } =
        useAppDrawerContext()
    const { toggleTheme, themeName } = useAppThemeContext()

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
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12)
                            }}
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    to={drawerOption.path}
                                    label={drawerOption.label}
                                    onClick={
                                        smDown ? toggleDrawerOpen : undefined
                                    }
                                />
                            ))}
                        </List>
                    </Box>

                    <Box>
                        <List component="nav">
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    {themeName === "light" ? (
                                        <WbSunnyIcon />
                                    ) : (
                                        <Brightness3Icon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        themeName === "light"
                                            ? "Change to Dark"
                                            : "Change to Light"
                                    }
                                />
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
