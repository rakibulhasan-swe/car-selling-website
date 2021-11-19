import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";
import swal from "sweetalert";

const OrderList = () => {
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [loginUser] = useContext(UserContext);
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Admin Dashboard";
    fetchDataApi();
  }, []);

  const fetchDataApi = () => {
    fetch(`${backendUrl}/creative-agency`)
      .then((response) => response.json())
      .then((data) => {
        let filterOrder = data.filter(
          (service) => service.email === loginUser.email
        );
        setOrder(filterOrder);
        setLoading(false);
      });
  };

  const deleteData = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    // console.log(id);
    fetch(`${backendUrl}/creative-agency/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authToken: window.localStorage.getItem("authToken"),
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchDataApi();
        swal("", data.message, "success");
        // console.log('Success:', data);
      })
      .catch((error) => {
        swal("", error.message, "error");
        // console.error('Error:', error);
      });
  };

  const deletefn = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteData(e);
        }
      })
      .catch((error) => {
        swal(error.message);
      });
  };

  document.title = "Order Lists";

  return (
    <>
      <Navigation />

      <Container fluid>
        <Row className="silde-menu">
          <SideBar customer={true} />
          <Col md={8} className="bg-light p-5">
            <Row>
              {loading ? (
                <Loader />
              ) : order !== [] ? (
                order.map((service) => (
                  <Col
                    lg={6}
                    className="my-2 serviceAnimation"
                    key={service._id}
                  >
                    <Card style={{ minHeight: "250px" }}>
                      <div>
                        <Card.Img
                          variant="top"
                          src={service.imageName}
                          style={{ width: "200px" }}
                          className="p-3 rounded"
                        />
                        <button className="float-right m-4 px-3 btn btn-light">
                          {service.status}
                        </button>
                      </div>
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text className="text-ellipsis">
                          {service.description}
                        </Card.Text>
                        <button
                          data-id={service._id}
                          className="btn btn-danger btn-sm"
                          onClick={deletefn}
                          type="button"
                        >
                          Delect
                        </button>
                      </Card.Body>
                    </Card>
                    <Card.Footer>
                      <small>{service.email}</small>
                    </Card.Footer>
                  </Col>
                ))
              ) : (
                <h3>No content here</h3>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderList;