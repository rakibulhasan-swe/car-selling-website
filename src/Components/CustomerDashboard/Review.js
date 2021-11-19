import React, { useContext, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import swal from "sweetalert";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

const Review = () => {
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [loginUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const email = loginUser.email;
    const newInfo = { ...info, email };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`${backendUrl}/review/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((data) => {
        swal(data.message, "", "success");
        setLoading(false);
        e.target.reset();
        // console.log('Success:', data);
      })
      .catch((error) => {
        swal("", error.message, "error");
        setLoading(false);
        e.target.reset();
        // console.error('Error:', error);
      });
  };
  
  
  document.title = "Review";
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row className="silde-menu">
          <SideBar customer={true} />
          <Col md={8}>
            <div className="mt-3 p-5 bg-light w-100">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    onBlur={handleBlur}
                    name="customerName"
                    placeholder="Your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    onBlur={handleBlur}
                    name="title"
                    placeholder="Company’s name, Designation"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    onBlur={handleBlur}
                    name="description"
                    rows={3}
                    placeholder="Description"
                    required
                  />
                </Form.Group>
                <Button variant="dark px-5" type="submit" disabled={loading}>
                  {loading ? "Loading…" : "Post Review"}
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

export default Review;
