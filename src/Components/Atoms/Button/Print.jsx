import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';

export const Print = () => {
  return (
    <Button
                    variant="outlined"
                    size="small"
                    color="neutral"
                    startIcon={<PrintIcon fontSize="inherit" />}
                >
                    Print
                </Button>
  )
}
