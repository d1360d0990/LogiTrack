import { Box, Typography, Grid, Card, CardContent, CardHeader, Divider } from '@mui/material';

const costos = [
  { servicio: 'Encomienda Estándar', costo: 1500 },
  { servicio: 'Encomienda Urgente', costo: 2500 },
  { servicio: 'Encomienda Internacional', costo: 5000 },
];

const TarifasEncomiendas = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Costos de Servicios de Encomiendas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {costos.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardHeader title={item.servicio} sx={{ backgroundColor: '#f4f4f4' }} />
              <Divider />
              <CardContent>
                <Typography variant="h5" color="primary" align="center">
                  ${item.costo.toLocaleString('es-AR')}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  (Incluye IVA)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TarifasEncomiendas;
