import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export const Download = () => {
  return (
    <Button
                    variant="outlined"
                    size="small"
                    color="neutral"
                    startIcon={<DownloadIcon fontSize="inherit" />}
                >
                    Download
                </Button>
  )
}
