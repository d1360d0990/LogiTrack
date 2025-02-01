import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import SdStorageIcon from '@mui/icons-material/SdStorage';

export const Support = () => {
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    width: 100,
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <SdStorageIcon sx={{ fontSize: 40 }} />
                <Typography variant="caption">Respaldar</Typography>
            </Button>

        </>
    )
}
