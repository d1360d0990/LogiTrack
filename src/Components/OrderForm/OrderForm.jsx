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
    const [departments, setDepartments] = useState([]);
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

    // Obtener departamentos cuando cambia la provincia
    useEffect(() => {
        if (!orderForm.originProvince) return;

        const fetchDepartments = async () => {
            try {
                const response = await fetch(
                    `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${orderForm.originProvince}&max=100`
                );
                const data = await response.json();
                setDepartments(data.departamentos);
            } catch (error) {
                console.error("Error al obtener departamentos:", error);
            }
        };
        fetchDepartments();
    }, [orderForm.originProvince]);

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

                {/* Fecha actual */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Fecha de creación"
                        name="orderDate"
                        value={new Date().toISOString().split("T")[0]} // Formato YYYY-MM-DD
                        fullWidth
                        disabled
                    />
                </Grid>

                {/* Origen (Provincia) */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Provincia de origen"
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

                {/* Origen (Departamento) */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        label="Departamento de origen"
                        name="originDepartment"
                        value={orderForm.originDepartment || ""}
                        onChange={handleChange}
                        fullWidth
                        required
                        disabled={!orderForm.originProvince} // Deshabilitado si no hay provincia seleccionada
                    >
                        {departments.length > 0 ? (
                            departments.map((department) => (
                                <MenuItem key={department.id} value={department.nombre}>
                                    {department.nombre}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>Seleccione una provincia primero</MenuItem>
                        )}
                    </TextField>
                </Grid>

                {/* Botones */}
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
