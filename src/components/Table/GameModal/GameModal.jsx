import { Box, Fade, IconButton, Modal, Typography, useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ModalClose, ModalFooter, ModalHeader, ModalWrapper } from './GameModal.styles'

export const GameModal = ({ open, handleClose, currentGame }) => {
    const theme = useTheme()

    return (
        <Modal open={open} onClose={handleClose}>
            <Fade in={open}>
                <ModalWrapper mode={theme.palette.mode}>
                    <ModalClose>
                        <IconButton onClick={handleClose} sx={{ color: 'inherit' }}>
                            <CloseIcon />
                        </IconButton>
                    </ModalClose>
                    <ModalHeader>{currentGame?.title}</ModalHeader>
                    <Box
                        sx={{
                            '& > img': {
                                width: '100%',
                            },
                        }}
                        mb={'15px'}
                    >
                        <img src={currentGame?.preview} alt={''} />
                    </Box>
                    <Typography mb={'15px'}>{currentGame?.description}</Typography>
                    <ModalFooter>{currentGame?.release_date}</ModalFooter>
                </ModalWrapper>
            </Fade>
        </Modal>
    )
}
