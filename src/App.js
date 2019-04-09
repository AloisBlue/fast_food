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

const App = ({ location }) => {
  return (
    <div className="App">
      <div className="container">
        <Slider />
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/menu/:id" exact component={SingleMenu} />
        <GuestRoute path="/signup" exact component={Signup} />
        <GuestRoute path="/login" exact component={Login} />
        <Route path="/menu" exact component={MainMenu} />
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
