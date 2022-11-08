import { Box, IconButton, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useContext } from 'react'
import { ColorModeContext } from '../../context/ColorModeContext'

export const ThemeButton = () => {
    const theme = useTheme()
    const { toggleColorMode } = useContext(ColorModeContext)

    return (
        <Box>
            <IconButton onClick={toggleColorMode} size="large">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}
