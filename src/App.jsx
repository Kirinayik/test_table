import { ThemeButton } from './components/ThemeButton/ThemeButton'
import { Table } from './components/Table/Table'
import { Box, Container } from '@mui/material'

export const App = () => {
    return (
        <Container sx={{ maxWidth: '1400px' }}>
            <Box component={'header'} p={'10px 15px'} display={'flex'} justifyContent={'flex-end'}>
                <ThemeButton />
            </Box>
            <Box component={'main'}>
                <Table />
            </Box>
        </Container>
    )
}
