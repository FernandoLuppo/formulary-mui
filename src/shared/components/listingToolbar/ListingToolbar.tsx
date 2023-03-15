import { Box, Button, Paper, useTheme } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import OutlinedInput from "@mui/material/OutlinedInput"

import type { IListingToolbarProps } from "../../types"
import { Environment } from "../../environment"

export const ListingToolbar: React.FC<Partial<IListingToolbarProps>> = ({
    searchText = "",
    showInputSearch = false,
    whenChangingSearchText,
    showButtonNew = true,
    whenClickInButtonNew
}) => {
    const theme = useTheme()

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
            component={Paper}
        >
            {showInputSearch && (
                <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="search-input">Search...</InputLabel>
                    <OutlinedInput
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label={Environment.SEARCH_INPUT}
                        value={searchText}
                        onChange={e => whenChangingSearchText?.(e.target.value)}
                    />
                </FormControl>
            )}

            {showButtonNew && (
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    onClick={whenClickInButtonNew}
                    endIcon={<AddIcon />}
                >
                    New
                </Button>
            )}
        </Box>
    )
}
