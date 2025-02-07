import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Logitrack from '../assets/Images/LogiTrack.png';

/**
 *
 * @param {Object} orderForm
 */
const generatePDF = (orderForm) => {
  const doc = new jsPDF();

  
  const imgUrl = `${Logitrack}`;
  doc.addImage(imgUrl, "PNG", 10, 10, 40, 20);

  
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 40);
  doc.text("Comprobante de Envío", 80, 20);

  
  doc.setLineWidth(0.5);
  doc.line(10, 35, 200, 35);

  
  doc.autoTable({
    startY: 40,
    head: [["Campo", "Información"]],
    body: [
      ["Fecha", orderForm.date],
      ["Estado", orderForm.status],
      ["Remitente", orderForm.senderName],
      ["Teléfono Remitente", orderForm.senderPhone],
      ["Destinatario", orderForm.recipientName],
      ["Teléfono Destinatario", orderForm.recipientPhone],
      ["Origen", `${orderForm.originProvince}, ${orderForm.originDepartment}`],
      ["Destino", `${orderForm.destinationProvince}, ${orderForm.destinationDepartment}`],
      ["Dirección de Entrega", orderForm.deliveryAddress],
      ["Descripción del Paquete", orderForm.packageDescription],
      ["Peso del Paquete", `${orderForm.packageWeight} kg`],
    ],
    styles: { fontSize: 11 },
    headStyles: { fillColor: [0, 102, 204] },
    alternateRowStyles: { fillColor: [240, 240, 240] },
  });

  
  const qrText = `Orden de ${orderForm.senderName} para ${orderForm.recipientName}`;
  doc.text("Código de Seguimiento:", 10, doc.autoTable.previous.finalY + 10);
  doc.addImage(
    `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(qrText)}`,
    "PNG",
    10,
    doc.autoTable.previous.finalY + 15,
    40,
    40
  );


  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Gracias por confiar en nuestro servicio de envíos.", 70, doc.internal.pageSize.height - 10);


  doc.save(`Comanda_${orderForm.senderName}.pdf`);
};

export default generatePDF;
