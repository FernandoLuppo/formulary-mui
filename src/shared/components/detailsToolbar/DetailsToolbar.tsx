import Button from "@mui/material/Button/Button"
import Paper from "@mui/material/Paper"
import useTheme from "@mui/material/styles/useTheme"
import { Box } from "@mui/system"
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"
import SaveIcon from "@mui/icons-material/Save"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Divider, Skeleton, Typography, useMediaQuery } from "@mui/material"
import type { IDetailsToolbarProps } from "../../types"

export const DetailsToolbar: React.FC<Partial<IDetailsToolbarProps>> = ({
    showButtonDelete = true,
    showButtonNew = true,
    showButtonReturn = true,
    showButtonSave = true,
    showButtonSaveAndReturn = false,
    showButtonDeleteLoading = false,
    showButtonNewLoading = false,
    showButtonReturnLoading = false,
    showButtonSaveAndReturnLoading = false,
    showButtonSaveLoading = false,
    whenClickInDelete,
    whenClickInNew,
    whenClickInReturn,
    whenClickInSave,
    whenClickInSaveAndReturn
}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))
    const mdDown = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={2}
            display="flex"
            alignItems="center"
            gap={1}
            component={Paper}
        >
            {showButtonSave && !showButtonSaveLoading && (
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    onClick={whenClickInSave}
                    startIcon={<SaveIcon />}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Save
                    </Typography>
                </Button>
            )}
            {showButtonSaveLoading && <Skeleton width={110} height={60} />}

            {showButtonSaveAndReturn &&
                !showButtonSaveAndReturnLoading &&
                !mdDown && (
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={whenClickInSaveAndReturn}
                        startIcon={<SaveIcon />}
                    >
                        <Typography
                            variant="button"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                            overflow="hidden"
                        >
                            Salve and Return
                        </Typography>
                    </Button>
                )}
            {showButtonSaveAndReturnLoading && !mdDown && (
                <Skeleton width={210} height={60} />
            )}

            {showButtonDelete && !showButtonDeleteLoading && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={whenClickInDelete}
                    startIcon={<DeleteIcon />}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Delete
                    </Typography>
                </Button>
            )}
            {showButtonDeleteLoading && <Skeleton width={112} height={60} />}

            {showButtonNew && !showButtonNewLoading && !smDown && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={whenClickInNew}
                    startIcon={<AddIcon />}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        New
                    </Typography>
                </Button>
            )}
            {showButtonNewLoading && !smDown && (
                <Skeleton width={90} height={60} />
            )}

            {showButtonReturn &&
                (showButtonSave ||
                    showButtonSaveAndReturn ||
                    showButtonDelete ||
                    showButtonNew) && (
                    <Divider variant="middle" orientation="vertical" />
                )}

            {showButtonReturn && !showButtonReturnLoading && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={whenClickInReturn}
                    startIcon={<ArrowBackIcon />}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Return
                    </Typography>
                </Button>
            )}
            {showButtonReturnLoading && <Skeleton width={116} height={60} />}
        </Box>
    )
}
