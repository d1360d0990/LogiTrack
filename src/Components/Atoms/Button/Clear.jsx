import { Button } from '@mui/material';

export const Clear = ({ onClick }) => {
  return (
    <Button variant="contained" color="info" onClick={onClick} sx={{ margin: 1 }}>
      Limpiar
    </Button>
  );
};