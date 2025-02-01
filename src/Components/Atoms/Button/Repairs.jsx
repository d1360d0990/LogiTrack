import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';

export const Repairs = () => {
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
                            <HandymanIcon sx={{ fontSize: 40 }} />
                            <Typography variant="caption">Reparaciones</Typography>
                        </Button>

</>
  )
}
  export default Repairs;
