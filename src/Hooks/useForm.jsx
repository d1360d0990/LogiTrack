import { useState } from "react";
import { postApi } from "../service/postApi";

export const useForm = () => {
  const [eventForm, setEventForm] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
    lugar: "",
    tickets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendData = await postApi(eventForm);
      console.log('Respuesta de la API:', sendData);
      resetForm();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const setFieldValue = (field, value) => {
    setEventForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setEventForm({
      nombre: "",
      descripcion: "",
      fecha: "",
      lugar: "",
      tickets: "",
    });
  };

  return {eventForm, handleSubmit, handleChange, setFieldValue, resetForm};
};
