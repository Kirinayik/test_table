import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useCallback, useState } from 'react'
import { useFreeGames } from '../../hooks/useFreeGames'
import { GameModal } from './GameModal/GameModal'

export const Table = () => {
    const columns = [
        {
            field: 'preview',
            headerName: 'Preview',
            width: 380,
            renderCell: (params) => <img src={params.value} alt={''} />,
            sortable: false,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
            renderCell: ({ row }) => <Box color={'red'}>{row.title}</Box>,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 400,
            renderCell: ({ row }) => <Box>{row.description}</Box>,
        },
        {
            field: 'release_date',
            headerName: 'Release',
            width: 150,
            renderCell: ({ row }) => <Box color={'blue'}>{row.release_date}</Box>,
        },
    ]
    const { games } = useFreeGames()
    const [open, setOpen] = useState(false)
    const [currentGame, setCurrentGame] = useState(null)
    const handleOpen = (params) => {
        setOpen(true)
        setCurrentGame(params.row)
    }
    const handleClose = useCallback(() => {
        setOpen(false)
        setCurrentGame(null)
    }, [])

    return (
        <>
            <Box
                sx={{
                    height: 600,
                    width: '100%',
                }}
            >
                <DataGrid
                    rows={games}
                    columns={columns}
                    pageSize={20}
                    onRowClick={handleOpen}
                    getRowHeight={() => 'auto'}
                    rowsPerPageOptions={[20]}
                    initialState={
                        localStorage.getItem('table-values')
                            ? JSON.parse(localStorage.getItem('table-values'))
                            : undefined
                    }
                    onStateChange={(e) => localStorage.setItem('table-values', JSON.stringify(e))}
                    sx={{
                        '.MuiDataGrid-cell:hover': {
                            cursor: 'pointer',
                        },
                        '.MuiDataGrid-cell:focus': {
                            outline: 'none',
                        },
                    }}
                />
            </Box>
            <GameModal open={open} handleClose={handleClose} currentGame={currentGame} />
        </>
    )
}
