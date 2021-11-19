import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Product from "../Product/Product";

const Inventory = () => {
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${backendUrl}/admin`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <>
      <Navigation></Navigation>
      <Container className="py-5">
        <h3 className="fw-bold text-center my-3">Inventory</h3>
        <Row className="mt-3">
          {services.map((service) => (
            <Product key={service._id} products={service}></Product>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Inventory;
