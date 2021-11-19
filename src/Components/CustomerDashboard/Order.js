import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, Redirect } from "react-router-dom";
import { UserContext } from "../../App";
import swal from "sweetalert";
import Navigation from "../Navigation/Navigation";

const Order = () => {
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [loginUser] = useContext(UserContext);
  const [path, setPath] = useState(false);
  const [info, setInfo] = useState({});
  const { title, description, price, imageName } = useParams();
  const { displayName: name, email } = loginUser;

  useEffect(() => {
    document.title = "Order";
    setInfo({
      name,
      email,
      title,
      description,
      price,
      imageName: decodeURIComponent(imageName),
    });
  }, [name, email, title, description, price, imageName]);
  
  
  const handleSubmit = (e) => {
    console.log(`Submit`);
    e.preventDefault();
    fetch(`${backendUrl}/creative-agency/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("Message", "Your Order post Success", "success");
        setPath(true);
        // console.log('Success:', data);
      })
      .catch((error) => {
        swal(error.message, "", "error");
        console.error("Error:", error);
      });
  };

  if (path) {
    return <Redirect to="/customer/orderlist" />;
  }

  return (
    <>
      <Navigation />
      <Container>
        <Row className="silde-menu">
          {/* <SideBar customer={true} /> */}
          <Col md={8}>
            <div className="mt-3 p-5 bg-light w-75">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    readOnly
                    defaultValue={name}
                    name="name"
                    placeholder="Your name / company’s name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    readOnly
                    defaultValue={email}
                    name="email"
                    placeholder="Your email address"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    readOnly
                    defaultValue={title}
                    name="title"
                    placeholder="Service name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    readOnly
                    defaultValue={description}
                    name="description"
                    rows={3}
                    placeholder="Project Details"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    readOnly
                    value={price}
                    name="price"
                    placeholder="Price"
                  />
                </Form.Group>
                <button className="btn btn-dark px-5" type="submit">
                  Order
                </button>
              </Form>
            </div>
          </Col>
          <Col md={4}>
            <Card className="my-3 mx-auto shadow">
              <Card.Img variant="top" src={decodeURIComponent(imageName)} />
              <Card.Body>
                <Card.Title className="pb-3 fw-bold">{title}</Card.Title>
                <Card.Text>
                  <small className="text-ellipsis">{description}</small>
                </Card.Text>
                <h4 className="fw-bold py-3">${price}</h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Order;
