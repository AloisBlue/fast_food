import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OrderForm from "./orderForm";

const MenuDetails = ({ singleMenu, isAuthenticated }) => {
  return (
    <div className="menudetails p-1">
      <div className="card p-2 mr-1 bg-pinkish col-6 float-left mb-1">
        <h3 className="text-center bg-warning">{singleMenu.item}</h3>
        <img
          className="w-100"
          src={`http://localhost:8080/${singleMenu.menuImage}`}
          alt="food"
        />
        <p className="text-center bg-dark text-light"><b>Price: </b>Kshs. <span className="text-danger">{singleMenu.price}</span>/=</p>
        <p className="text-center card">{singleMenu.description}</p>
      </div>
      <div className="card p-2 bg-pinkish col-5 float-right">
        {isAuthenticated ? (
          <div>
            <p className="bg-dark text-light text-center">Purchase</p>
            <OrderForm singleMenu={singleMenu} />
          </div>
        ) : (
          <div className="card p-1 m-auto bg-light">
            <p className="bg-dark text-light text-center">Login Please</p>
            <p className="text-center">To make an order you
              must be logged in.
            </p>
            <Link className="btn btn-success" to="/login">Go to Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

MenuDetails.propTypes = {
  singleMenu: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps)(MenuDetails);
