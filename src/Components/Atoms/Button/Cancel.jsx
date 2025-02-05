import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const Cancel = () => {
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate('/home');
      };
  return (
    <>
    <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCancel}
                  sx={{ margin: 1 }}
                >
                  Cancelar
                </Button>
    </>
  )
}
