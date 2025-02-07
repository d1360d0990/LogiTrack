import { Alert, Grid, Typography, TextField, MenuItem } from "@mui/material";
import { Cancel } from "../Atoms/Button/Cancel";
import { useForm } from '../../Hooks/useForm';
import { Register } from "../Atoms/Button/Register";
import { Clear } from "../Atoms/Button/Clear";
import "./OrderForm.css";


const OrderForm = () => {
    const { orderForm, handleSubmit, handleChange, resetForm, alertData } = useForm();

    const statuses = ["Pendiente", "En tránsito", "Entregado"];

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* Título */}
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Formulario de Comanda
                    </Typography>
                </Grid>

                {/* Mostrar alerta condicionalmente */}
                {alertData.show && (
                    <Grid item xs={12}>
                        <Alert severity={alertData.severity}>{alertData.message}</Alert>
                    </Grid>
                )}

                {/* Datos del remitente */}
                <Grid item xs={12}>
                    <Typography variant="h6">Datos del remitente</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Nombre del remitente"
                        name="senderName"
                        value={orderForm.senderName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Teléfono del remitente"
                        name="senderPhone"
                        value={orderForm.senderPhone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">Datos del destinatario</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Nombre del destinatario"
                        name="recipientName"
                        value={orderForm.recipientName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Teléfono del destinatario"
                        name="recipientPhone"
                        value={orderForm.recipientPhone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">Información del paquete</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Descripción del paquete"
                        name="packageDescription"
                        value={orderForm.packageDescription}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Peso del paquete (kg)"
                        name="packageWeight"
                        value={orderForm.packageWeight}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Dirección de entrega"
                        name="deliveryAddress"
                        value={orderForm.deliveryAddress}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        select
                        label="Estado de la comanda"
                        name="status"
                        value={orderForm.status}
                        onChange={handleChange}
                        fullWidth
                        required
                    >
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <div className="order-form_buttons">
                        <Register />
                        <Clear onClick={resetForm} />
                        <Cancel />
                    </div>
                </Grid>
            </Grid>
        </form>
    );
};

export default OrderForm;