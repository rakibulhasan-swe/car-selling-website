import React from "react";
import { Col, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import swal from "sweetalert";


const SideBar = ({ admin, customer }) => {
  
  const auth = getAuth();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        swal("SignOut successful", "Account Sign Out successful", "success");
      })
      .catch((error) => {
        swal("SignOut Error", error.message, "error");
      });
  };
  return (
    <>
      {admin && (
        <>
          <Col md={2}>
            <h3 className="text-center py-2">Admin Dashboard</h3>
            <div className="row justify-content-between h-100">
              <Nav className="flex-column w-100">
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/admin/manage-all-order"
                >
                  Manage All Orders
                </NavLink>
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/admin/add-product"
                >
                  Add A Product
                </NavLink>
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/admin/make-admin"
                >
                  Make Admin
                </NavLink>
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/admin/manage-products"
                >
                  Manage Products
                </NavLink>
                <div
                  onClick={userSignOut}
                  style={{ cursor: "pointer" }}
                  className="nav-link text-dark w-100 hover-effect"
                >
                  Logout
                </div>
              </Nav>
              <div>
                <Link to="/" className="btn btn-outline-dark w-100">
                  GoTo Home
                </Link>
              </div>
            </div>
          </Col>
        </>
      )}
      {customer && (
        <>
          <Col md={2}>
            <h4 className="text-center py-2">Customer Dashboard</h4>
            <div className="row justify-content-between h-100">
              <Nav className="flex-column w-100">
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/customer/orderlist"
                >
                  My Orders
                </NavLink>
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/customer/pay"
                >
                  Pay
                </NavLink>
                <NavLink
                  activeStyle={{
                    backgroundColor: "#ececec",
                  }}
                  className="nav-link text-dark w-100 hover-effect"
                  to="/customer/review"
                >
                  Review
                </NavLink>
                <div
                  onClick={userSignOut}
                  style={{ cursor: "pointer" }}
                  className="nav-link text-dark w-100 hover-effect"
                >
                  Logout
                </div>
              </Nav>
              <div>
                <Link to="/" className="btn btn-outline-dark w-100">
                  GoTo Home
                </Link>
              </div>
            </div>
          </Col>
        </>
      )}
    </>
  );
};

export default SideBar;
