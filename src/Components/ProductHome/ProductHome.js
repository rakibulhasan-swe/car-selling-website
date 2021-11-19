import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { UserContext } from "../../App";
import Loader from "../Loader/Loader";

const ProductHome = () => {
  const [loginUser] = useContext(UserContext);
  const [admin, setAdmin] = useState();
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/admin`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`${backendUrl}/make-admin`)
      .then((response) => response.json())
      .then((data) => {
        const oneAdmin = data.find(
          (adminData) => adminData.email === loginUser.email
        );
        setAdmin(oneAdmin);
      })
      .catch((error) => {
        console.error(error);
        swal("Error", error.message, "error");
      });
  }, [admin, loginUser]);

  return (
    <>
      <Container className="pb-5">
        <Row>
          <h1 className="text-center fs-2 pt-5 fw-bold">Inventory</h1>
          {!car ? (
            <Loader />
          ) : (
            car.slice(0, 6).map((item, key) => (
              <Col lg={4} key={key} className="my-3">
                <Card className="shadow">
                  <Card.Img variant="top" src={item.fileName} />
                  <Card.Body>
                    <Card.Title className="pb-3 fw-bold">
                      {item.title}
                    </Card.Title>
                    <Card.Text>
                      <small className="text-ellipsis">
                        {item.description}
                      </small>
                    </Card.Text>
                    <h4 className="fw-bold py-3">${item.price}</h4>
                    <Link
                      to={
                        admin?.email
                          ? ""
                          : `/customer/order/${key}/${item.title}/${
                              item.price
                            }/${encodeURIComponent(item.fileName)}/${
                              item.description
                            }`
                      }
                      className="btn btn-danger w-100 fw-bold"
                    >
                      <FontAwesomeIcon className="me-1" icon={faShoppingCart} />{" "}
                      Purchase
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductHome;
