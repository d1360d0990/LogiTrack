import { useState } from "react";
import postApi from "../service/postApi.js";
import generatePDF from "../service/generatePDF.js";
import Swal from "sweetalert2";

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
    date: "",
    originProvince: "",
    originDepartment: "",
    destinationProvince: "",
    destinationDepartment: "",
    
  });

  const [alertData, setAlertData] = useState({ message: "", severity: "", show: false });

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
      await postApi(orderForm);
      console.log("Orden enviada correctamente");
      Swal.fire({
        title: "Orden Registrada correctamente",
        icon: "success",
        draggable: true
    }) 
      resetForm();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setAlertData({ message: "Error al enviar la orden", severity: "warning", show: true });
    }
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
    date: "",
    originProvince: "",
    originDepartment: "",
    destinationProvince: "",
    destinationDepartment: "",
    });
    setAlertData({ message: "", severity: "", show: false });
  };

  return {
    orderForm,
    handleChange,
    handleSubmit,
    resetForm,
    alertData,
  };
};