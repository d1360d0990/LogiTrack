import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const Tracker = ({ onClick }) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          width: 100,
          height: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
        <TravelExploreIcon sx={{ fontSize: 40 }} />
        <Typography variant="caption">Rastrear envío</Typography>
      </Button>
    </>
  );
};
