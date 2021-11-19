import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import AddService from "./Components/AdminDashboard/AddService";
import { createContext, useState } from "react";
import MakeAdmin from "./Components/AdminDashboard/MakeAdmin";
import ManageAllOrder from "./Components/AdminDashboard/ManageAllOrder";
import ManageProducts from "./Components/AdminDashboard/ManageProducts";
import Order from "./Components/CustomerDashboard/Order";
import Review from "./Components/CustomerDashboard/Review";
import Login from "./Components/Login/Login";
import CustomerPay from "./Components/CustomerDashboard/CustomerPay";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import UpdateService from "./Components/AdminDashboard/UpdateService";
import OrderList from "./Components/CustomerDashboard/OrderList";

export const UserContext = createContext(null);

function App() {
  const [loginUser, setloginUser] = useState({});

  return (
    <UserContext.Provider value={[loginUser, setloginUser]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/customer/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/customer/orderlist">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/customer/order/:id/:title/:price/:imageName/:description">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/customer/pay">
            <CustomerPay></CustomerPay>
          </PrivateRoute>
          <PrivateRoute path="/admin/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin/add-product">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/admin/manage-all-order">
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>
          <PrivateRoute path="/admin/manage-products">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute path="/admin/updateService/:nodejsRoute/:id/:title/:description">
            <UpdateService />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <h1>404 page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
