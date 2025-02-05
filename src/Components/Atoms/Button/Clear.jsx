import { Button } from '@mui/material';

export const Clear = ({ onClick }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick} sx={{ margin: 1 }}>
      Clear
    </Button>
  );
};