import React from "react";
import PropTypes from "prop-types";

const MenuDetails = ({ singleMenu }) => {
  return (
    <div className="menudetails">
      <div className="col-6 float-left">
        <h3 className="text-center bg-warning">{singleMenu.item}</h3>
        <img
          src={`http://localhost:8080/${singleMenu.menuImage}`}
          width="329"
          alt="food"
        />
        <p className="text-center bg-dark text-light"><b>Price: </b>Kshs. <span className="text-danger">{singleMenu.price}</span>/=</p>
        <p className="text-center card">{singleMenu.description}</p>
      </div>
      <div className="col-6 float-right">
        <p>Purchase</p>
      </div>
    </div>
  );
}

MenuDetails.propTypes = {
  singleMenu: PropTypes.object.isRequired
}

export default MenuDetails;
