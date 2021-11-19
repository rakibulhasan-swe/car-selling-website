
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

const CustomerPay = () => {
  document.title = "Review";
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row className="silde-menu">
          <SideBar customer={true} />
          <Col md={8}>
            <div className="mt-3 p-5 bg-light w-100">
              <h1> Payment system coming soon....</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CustomerPay;