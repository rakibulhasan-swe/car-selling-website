import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";
import swal from "sweetalert";
import SideBar from "../SideBar/SideBar";


const AddService = () => {
  const backendUrl = "https://creative-agency-main.glitch.me";
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState();

  document.title = "Add Service";

  const handleChange = (event) => {
    const name = event.target.name;
    setService({
      ...service,
      [name]: event.target.value,
      // fileName,
    });
  };

  console.log(service);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setLoading(true);

    fetch(`${backendUrl}/admin/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("", data.message, "success");
        setLoading(false);
        e.target.reset();
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        swal("Error", error.message, "error");
        setLoading(false);
        e.target.reset();
      });
  };

  return (
    <>
      {/* <Navigation /> */}
      <Container fluid>
        <Row className="silde-menu">
          <SideBar admin="true" />
          <Col md={8} className="bg-light p-5">
            <div
              style={{ backgroundColor: "#fff", borderRadius: "20px" }}
              className="p-2"
            >
              <Form className="pb-5 p-3" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Service Title</Form.Label>
                  <Form.Control
                  className="mb-3"
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    onBlur={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Service Price</Form.Label>
                  <Form.Control
                  className="mb-3"
                    type="number"
                    placeholder="Price"
                    name="price"
                    onBlur={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control
                  className="mb-3"
                    type="text"
                    placeholder="Image URL"
                    name="fileName"
                    onBlur={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                  className="mb-3"
                    as="textarea"
                    rows={3}
                    placeholder="Enter Description"
                    name="description"
                    onBlur={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="dark px-5" type="submit" disabled={loading}>
                  {loading ? "Loading…" : "Submit"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddService;
