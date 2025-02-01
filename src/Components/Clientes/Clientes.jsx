import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import {
    PageContainer,
    PageHeader
} from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import { Typography } from '@mui/material';
import { OutlinedInput } from '@mui/material'
import { useState } from 'react';
import EventTable from '../Main/EventTable/EventTable';



function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

function CustomPageToolbar() {
    return (
        <React.Fragment>
            <Typography variant="h4" component="h4" sx={{ textAlign: 'left' }} className="event-table-title">
                Sistema de Asistencia Técnica
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
                <Button
                    variant="outlined"
                    size="small"
                    color="neutral"
                    startIcon={<DownloadIcon fontSize="inherit" />}
                >
                    Download
                </Button>
                <Button
                    variant="outlined"
                    size="small"
                    color="neutral"
                    startIcon={<PrintIcon fontSize="inherit" />}
                >
                    Print
                </Button>
            </Stack>
        </React.Fragment>
    );
}

function CustomPageHeader() {
    return <PageHeader slots={{ toolbar: CustomPageToolbar }} />;
}

export default function Clientes(props) {

    const [inputValue, setInputValue] = useState('');
    const handleClear = () => {
        setInputValue('');
    };
    const handleCreateEventClick = () => {
        navigate('/addEvent');
    }

    return (
        <AppProvider    >
            <Paper sx={{ p: 2, width: '100%' }}>
                <PageContainer
                    slots={{
                        header: CustomPageHeader,
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid size={5} />
                        <Grid size={12}>
                            <OutlinedInput
                                placeholder="N° de Rastreo"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ width: '60%' }}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />

                            <Button onClick={handleClear} variant="contained" color="success" sx={{ margin: '10px' }}>
                                LIMPIAR BUSQUEDA
                            </Button>
                            <Button onClick={handleCreateEventClick} variant="contained" color="primary" sx={{ margin: '5px' }}>AGREGAR CLIENTE</Button>
                        </Grid>
                        
                    </Grid>

<EventTable/>
                </PageContainer>

            </Paper>
        </AppProvider>
    );
}