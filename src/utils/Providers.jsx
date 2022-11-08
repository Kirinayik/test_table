import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo, useState } from 'react'
import { ColorModeContext } from '../context/ColorModeContext'

const getInitialTheme = () => {
    return localStorage.getItem('mode') || 'light'
}

export const Providers = ({ children }) => {
    const [mode, setMode] = useState(getInitialTheme())
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const value = prevMode === 'light' ? 'dark' : 'light'
                    localStorage.setItem('mode', value)
                    return value
                })
            },
        }),
        []
    )
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
