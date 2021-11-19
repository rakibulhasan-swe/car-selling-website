import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import swal from "sweetalert";

const Navigation = () => {
  const [loginUser, setloginUser] = useContext(UserContext);
  const [admin, setAdmin] = useState();
  const [showAdmin, setShowAdmin] = useState(false);
  const backendUrl = "https://creative-agency-main.glitch.me";
  const auth = getAuth();

  useEffect(() => {
    fetch(`${backendUrl}/make-admin`)
      .then((response) => response.json())
      .then((data) => {
        const oneAdmin = data.find(
          (adminData) => adminData.email === loginUser.email
        );
        setAdmin(oneAdmin);
        setShowAdmin(true);
      })
      .catch((error) => {
        console.error(error);
        swal("Error", error.message, "error");
      });
  }, [admin, loginUser]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, photoURL } = user;
        setloginUser({ accessToken, displayName, email, photoURL });
      } else {
        setloginUser({});
      }
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setloginUser({});
        swal("SignOut successful", "Account Sign Out successful", "success");
      })
      .catch((error) => {
        swal("SignOut Error", error.message, "error");
      });
  };

  return (
    <Navbar bg="dark" expand="lg" className="shadow sticky-top">
      <Container>
        <Link className="navbar-link" to="/">
          <img src={logo} alt="Logo of this page"></img>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link text-white" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/inventory">
              Explore
            </NavLink>
            <NavLink className="nav-link text-white" to="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-link text-white" to="/blog">
              Blog
            </NavLink>
            <NavLink className="nav-link text-white" to="/about">
              About us
            </NavLink>
            {showAdmin && loginUser.displayName ? (
              <>
                <button className="btn btn-primary">
                  {loginUser.displayName}
                </button>
                <button onClick={userSignOut} className="btn btn-danger mx-1">
                  SignOut
                </button>
              </>
            ) : (
              <NavLink className="nav-link text-white" to="/login">
                Login
              </NavLink>
            )}

            {showAdmin &&
              admin?.email === loginUser?.email &&
              typeof admin?.email == "string" && (
                <NavLink
                  className="nav-link text-white"
                  to="/admin/manage-all-order"
                >
                  Dashboard
                </NavLink>
              )}

            {admin?.email !== loginUser?.email && (
              <NavLink className="nav-link text-white" to="/customer/orderlist">
                Dashboard
              </NavLink>
            )}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
