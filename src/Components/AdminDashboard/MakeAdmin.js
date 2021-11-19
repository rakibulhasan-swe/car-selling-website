import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import swal from 'sweetalert';
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";


const MakeAdmin = () => {
  const backendUrl = 'https://creative-agency-main.glitch.me';
  const [loading, setLoading] = useState(false);
  const [adminEmail, setadminEmail] = useState({});
  document.title = "Make admin";

  const handleChange = (event) => {
    const name = event.target.name;
    setadminEmail({ 
      ...adminEmail,
      [name]: event.target.value
    });
  }

  const makeAdmin = (e) => {
    e.preventDefault();
    fetch(`${backendUrl}/make-admin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminEmail),  
    })
    .then(response => response.json())
    .then(data => {
        // console.log('Success:', data);
        swal(data.message, "", "success");
        setLoading(false);
        e.target.reset();
    })
    .catch((error) => {
        // console.error('Error:', error);
        swal("Error", error.message, "error");
        setLoading(false);
        e.target.reset();
    });
}
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row className="silde-menu">
          <SideBar admin="true" />
          <Col md={8} className="mt-3 bg-light p-5">
            <div
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
              className="p-2"
            >
              <Form className="pb-5 p-3" onSubmit={makeAdmin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@gmail.com"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="dark px-5 mt-3" type="submit" disabled={loading}>
                  {loading ? 'Loading…' : 'Make Admin'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MakeAdmin;