import { useEffect, useState } from "react";
import { Alert, Grid, Typography, TextField, MenuItem } from "@mui/material";
import { Cancel } from "../Atoms/Button/Cancel";
import { useForm } from '../../Hooks/useForm';
import { Register } from "../Atoms/Button/Register";
import { Clear } from "../Atoms/Button/Clear";
import "./OrderForm.css";

const OrderForm = () => {
    const { orderForm, handleSubmit, handleChange, resetForm, alertData } = useForm();
    const [provinces, setProvinces] = useState([]);
    const [originDepartments, setOriginDepartments] = useState([]);
    const [destinationDepartments, setDestinationDepartments] = useState([]);
    const statuses = ["Pendiente", "En tránsito", "Entregado"];

    // Obtener provincias desde la API
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
                const data = await response.json();
                setProvinces(data.provincias);
            } catch (error) {
                console.error("Error al obtener provincias:", error);
            }
        };
        fetchProvinces();
    }, []);

    // Obtener departamentos cuando cambia la provincia de origen
    useEffect(() => {
        if (!orderForm.originProvince) return;

        const fetchDepartments = async () => {
            try {
                const response = await fetch(
                    `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${orderForm.originProvince}&max=100`
                );
                const data = await response.json();
                setOriginDepartments(data.departamentos);
            } catch (error) {
                console.error("Error al obtener departamentos de origen:", error);
            }
        };
        fetchDepartments();
    }, [orderForm.originProvince]);

    // Obtener departamentos cuando cambia la provincia de destino
    useEffect(() => {
        if (!orderForm.destinationProvince) return;

        const fetchDepartments = async () => {
            try {
                const response = await fetch(
                    `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${orderForm.destinationProvince}&max=100`
                );
                const data = await response.json();
                setDestinationDepartments(data.departamentos);
            } catch (error) {
                console.error("Error al obtener departamentos de destino:", error);
            }
        };
        fetchDepartments();
    }, [orderForm.destinationProvince]);

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

                {/* Datos del destinatario */}
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

                {/* Información del paquete */}
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

                {/* Estado de la comanda */}
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


                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Fecha de la orden"
                        name="date"
                        type="date"
                        value={orderForm.date}
                        onChange={handleChange}
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true, // Para que la etiqueta no se superponga con el selector de fecha
                        }}
                    />
                </Grid>


                {/* Origen */}
                <Grid item xs={12}>
                    <Typography variant="h6">Ubicación de Origen</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Provincia de Origen"
                        name="originProvince"
                        value={orderForm.originProvince || ""}
                        onChange={handleChange}
                        fullWidth
                        required
                    >
                        {provinces.map((province) => (
                            <MenuItem key={province.id} value={province.nombre}>
                                {province.nombre}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Localidad de Origen"
                        name="originDepartment"
                        value={orderForm.originDepartment || ""}
                        onChange={handleChange}
                        fullWidth
                        required
                        disabled={!orderForm.originProvince}
                    >
                        {originDepartments.map((department) => (
                            <MenuItem key={department.id} value={department.nombre}>
                                {department.nombre}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="h6">Ubicación de Destino</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Provincia de Destino"
                        name="destinationProvince"
                        value={orderForm.destinationProvince || ""}
                        onChange={handleChange}
                        fullWidth
                        required
                    >
                        {provinces.map((province) => (
                            <MenuItem key={province.id} value={province.nombre}>
                                {province.nombre}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Localidad de Destino"
                        name="destinationDepartment"
                        value={orderForm.destinationDepartment || ""}
                        onChange={handleChange}
                        fullWidth
                        required
                        disabled={!orderForm.destinationProvince}
                    >
                        {destinationDepartments.map((department) => (
                            <MenuItem key={department.id} value={department.nombre}>
                                {department.nombre}
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
