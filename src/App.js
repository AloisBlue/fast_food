import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Footer from "./components/layout/footer";
import Slider from "./components/layout/slider";
import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/landing";
import Menu from "./components/layout/menu";
import Signup from "./components/auth/signup";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Slider />
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/menu" exact component={Menu} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
