import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const FailureBase = () => {
  return (
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
                            <AutoStoriesIcon sx={{ fontSize: 40 }} />
                            <Typography variant="caption">Base de Fallas</Typography>
                        </Button>
  )
}
