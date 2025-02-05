import axios from "axios";
import { addOrderURL, baseURL } from "../App";

export const postApi = async (orderForm) => {
  try {
    const response = await axios.post(`${baseURL}${addOrderURL}`, {
      senderName: orderForm.senderName,
      senderPhone: orderForm.senderPhone,
      recipientName: orderForm.recipientName,
      recipientPhone: orderForm.recipientPhone,
      packageDescription: orderForm.packageDescription,
      packageWeight: orderForm.packageWeight,
      deliveryAddress: orderForm.deliveryAddress,
      status: orderForm.status,
    });
    console.log("Respuesta de la API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos a la API:", error);
    throw error;
  }
};
