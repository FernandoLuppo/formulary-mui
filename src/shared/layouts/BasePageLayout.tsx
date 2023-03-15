import {
    Box,
    Typography,
    useTheme,
    IconButton,
    useMediaQuery
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import type { IBasePageLayout } from "../types"
import { useAppDrawerContext } from "../context"

export const BasePageLayout: React.FC<IBasePageLayout> = ({
    children,
    title,
    ListingToolbar
}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))
    const mdDown = useMediaQuery(theme.breakpoints.down("md"))

    const { toggleDrawerOpen } = useAppDrawerContext()

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box
                display="flex"
                alignItems="center"
                gap={1}
                padding={1}
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
            >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                )}

                <Typography
                    variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="normal"
                >
                    {title}
                </Typography>
            </Box>
            {ListingToolbar !== null && <Box>{ListingToolbar}</Box>}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    )
}
