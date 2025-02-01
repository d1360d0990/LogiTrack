import { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    MenuItem,
    Typography,
} from "@mui/material";

const OrderForm = () => {
    const [formData, setFormData] = useState({
        senderName: "",
        senderPhone: "",
        recipientName: "",
        recipientPhone: "",
        packageDescription: "",
        packageWeight: "",
        deliveryAddress: "",
        status: "Pendiente",
    });

    const statuses = ["Pendiente", "En tránsito", "Entregado"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* Título */}
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Formulario de Comanda
                    </Typography>
                </Grid>

                {/* Datos del remitente */}
                <Grid item xs={12}>
                    <Typography variant="h6">Datos del remitente</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Nombre del remitente"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Teléfono del remitente"
                        name="senderPhone"
                        value={formData.senderPhone}
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
                        value={formData.recipientName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Teléfono del destinatario"
                        name="recipientPhone"
                        value={formData.recipientPhone}
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
                        value={formData.packageDescription}
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
                        value={formData.packageWeight}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Dirección de entrega"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
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
                        value={formData.status}
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Registrar Comanda
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default OrderForm;
