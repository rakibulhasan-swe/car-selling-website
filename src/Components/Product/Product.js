import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Product = (props) => {
  const { title, price, fileName, description } = props.products;

  // displaying 200 characters of string
  // let result = desc.slice(0, 100) + (desc.length > 100 ? "..." : "");

  return (
    <Col md={4}>
      <Card className="my-3 mx-auto shadow">
        <Card.Img variant="top" src={fileName} />
        <Card.Body>
          <Card.Title className="pb-3 fw-bold">{title}</Card.Title>
          <Card.Text>
            <small className="text-ellipsis">{description}</small>
          </Card.Text>
          <h4 className="fw-bold py-3">${price}</h4>
          <button className="btn btn-danger fw-bold w-100">
            <FontAwesomeIcon className="me-1" icon={faShoppingCart} />
            Purchase
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
