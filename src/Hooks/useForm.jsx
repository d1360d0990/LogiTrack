import { useState } from "react";
import { postApi } from "../service/postApi";

export const useForm = () => {
  const [orderForm, setOrderForm] = useState({
    senderName: "",
    senderPhone: "",
    recipientName: "",
    recipientPhone: "",
    packageDescription: "",
    packageWeight: "",
    deliveryAddress: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendData = await postApi(orderForm);
      console.log('Respuesta de la API:', sendData);
      resetForm();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const setFieldValue = (field, value) => {
    setOrderForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setOrderForm({
      senderName: "",
      senderPhone: "",
      recipientName: "",
      recipientPhone: "",
      packageDescription: "",
      packageWeight: "",
      deliveryAddress: "",
      status: "",
    });
  };

  return {orderForm, handleSubmit, handleChange, setFieldValue, resetForm};
};

export default useForm;