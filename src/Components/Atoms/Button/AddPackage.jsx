import { Button } from "@mui/material";
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import { useNavigate } from 'react-router-dom';

export const AddPackage = () => {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    navigate('/packages/addPackage/OrderForm'); // Actualiza la ruta aquí
  };

  return (
    <Button 
      onClick={handleCreateEventClick} 
      variant="contained" 
      color="success" 
      sx={{ margin: '5px' }}
    >
      <ControlPointTwoToneIcon sx={{ fontSize: 25, marginRight: '5px' }} />
      AGREGAR PAQUETE
    </Button>
  );
};
