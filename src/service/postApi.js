import axios from "axios";
import { addOrdertURL, baseURL } from "../App";

export const postApi = async (orderForm) => {
  try {
    const response = await axios.post(`${baseURL}${addOrdertURL}`, {
      nombre: orderForm.nombre,
      descripcion: orderForm.descripcion,
      fecha: orderForm.fecha,
      lugar: orderForm.lugar,
      tickets: orderForm.tickets,
    });
    console.log('Respuesta de la API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos a la API:', error);
    throw error;
  }
};
