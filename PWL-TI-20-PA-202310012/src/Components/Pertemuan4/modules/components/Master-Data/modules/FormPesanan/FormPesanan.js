import React from 'react'
import {Form, Button} from 'react-bootstrap'

const FormPesanan = () => {
  return (
    <Form>
    <Form.Group className="mt-5" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group className="mt-5" controlId="formBasicPassword">
      <Form.Label>Nomor Telepon</Form.Label>
      <Form.Control type="text" placeholder="Enter yout phone number" />
    </Form.Group>
    <Form.Group className="mt-5" controlId="formBasicPassword">
      <Form.Label>Pilih tanggal kunjungan</Form.Label>
      <Form.Control type="date" placeholder="Enter date" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default FormPesanan;