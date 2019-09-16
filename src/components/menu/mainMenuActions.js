import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItems = ({ menu }) => {
  return (
    <div className="card bg-pinkish col-12 text-center mb-3 mr-2 p-3">
      <div className="row">
        <div className="menu-hover">
          <Link to={`/menu/${menu[0].category}`}>
            <div className="m-auto card">
              <h5 className="bg-warning text-black">{menu[0].category}</h5>
              <img
                className="bg-info"
                src={`http://localhost:8080/${menu[0].menuImage}`}
                width="200"
                height="200"
                alt="food"
              />
            <p className="bg-dark text-danger" style = {{fontStyle: 'italic'}}>Click here</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

MenuItems.propTypes = {
  menu: PropTypes.array.isRequired
}

export default MenuItems;
