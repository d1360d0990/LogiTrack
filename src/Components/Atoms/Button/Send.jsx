import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom'; 

export const Send = () => {
  const navigate = useNavigate();

  const handleSendClick = () => {
    navigate('/packages');
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleSendClick}
        sx={{
          width: 100,
          height: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LocalShippingIcon sx={{ fontSize: 40 }} />
        <Typography variant="caption">Envíos</Typography>
      </Button>
    </>
  );
};

export default Send;
