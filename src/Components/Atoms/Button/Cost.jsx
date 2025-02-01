import Button from '@mui/material/Button';
import FunctionsIcon from '@mui/icons-material/Functions';
import { Typography } from '@mui/material';

export const Cost = () => {
  return (
 <>
 <Button variant="contained" sx={{width: 100, height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px'}} >
                                <FunctionsIcon sx={{ fontSize: 40 }} />
                                <Typography variant="caption">Tarifas y Costos</Typography>
                            </Button>
 </>
  )
}
