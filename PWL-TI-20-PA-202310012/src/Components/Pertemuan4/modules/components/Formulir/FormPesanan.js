import React, { useEffect, useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import axios from "axios";

const FormPesanan = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    no_telp: "",
    tgl_kunjung: "",
  });

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isFormEmpty = Object.values(formData).some((value) => value === "");

    if (isFormEmpty) {
      console.log("data form kosong");
      setShowAlert(true);
      return;
    }

    try {
      await axios.post("http://localhost:3003/order_product", formData);
      console.log("Data berhasil disimpan ke database");

      const message = `Halo, saya ingin memesan dengan detail:\nNama: ${formData.name}\nNomor Telepon: ${formData.no_telp}\nTanggal Kunjungan: ${formData.tgl_kunjung}`;
      const whatsappURL = `https://wa.me/+62895331115758/?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappURL;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card border justify-content-center mt-5 p-4" style={{ backgroundColor: "grey", width: "40rem", padding: "7rem 0" }}>
      {showAlert && (
        <div className="alert alert-success" onClose={() => setShowAlert(false)} dismissible>
          {successMessage}
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nomor Telepon</Form.Label>
          <Form.Control type="text" placeholder="Enter Password" name="no_telp" value={formData.no_telp} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pilih tanggal Reservasi</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" name="tgl_kunjung" value={formData.tgl_kunjung} onChange={handleChange} />
        </Form.Group>
        <Button variant="success" type="submit" disabled={Object.values(formData).some((value) => value === "")}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormPesanan;