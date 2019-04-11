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
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import MainMenu from "./components/menu/mainMenu";
import SingleMenu from "./components/singlemenu/singleMenu";
import Orders from "./components/orders/orders";

const App = ({ location }) => {
  return (
    <div className="App">
      <div className="container card bg-pink p-1">
        <Slider />
        <Navbar />
        <Route location={location} path="/" exact component={Landing} />
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
    path: PropTypes.string.isRequired
  }).isRequired
}

export default App;
