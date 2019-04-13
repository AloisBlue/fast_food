import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./components/layout/footer";
import Slider from "./components/layout/slider";
import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/landing";
import GuestRoute from "./components/routes/guestRoute";
import UserRoute from "./components/routes/userRoute";
import AdminRoute from "./components/routes/adminRoute";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import MainMenu from "./components/menu/mainMenu";
import SingleMenu from "./components/singlemenu/singleMenu";
import Orders from "./components/orders/orders";
import AdminOrders from "./components/admin/adminOrders";
import CompletedOrder from "./components/admin/completedOrder";
import ManageMenu from "./components/admin/manageMenu";
import MenuForm from "./components/admin/menuForm";

const App = ({ location }) => {
  return (
    <div className="App">
      <div className="container card bg-pink p-1">
        <Slider />
        <Navbar />
        <Route location={location} path="/" exact component={Landing} />
        <AdminRoute location={location} path="/addmenu" exact component={MenuForm} />
        <AdminRoute location={location} path="/admin" exact component={AdminOrders} />
        <AdminRoute location={location} path="/complete" exact component={CompletedOrder} />
        <AdminRoute location={location} path="/managemenu" exact component={ManageMenu} />
        <UserRoute location={location} path="/orders" exact component={Orders} />
        <Route location={location} path="/menu/:id" exact component={SingleMenu} />
        <GuestRoute location={location} path="/signup" exact component={Signup} />
        <GuestRoute location={location} path="/login" exact component={Login} />
        <Route location={location} path="/menu" exact component={MainMenu} />
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
