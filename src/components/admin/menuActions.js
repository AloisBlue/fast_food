import React from "react";
import PropTypes from "prop-types";

const MenuActions = ({ allMenu }) => {
  const mapMenu = allMenu.menu.map(menu => (
    <tr key={menu._id} className="">
      <td>{menu.item}</td>
      <td className="text-danger">{menu.price}</td>
      <td>{menu.description}</td>
      <td className="btn-dark">Edit</td>
      <td className="btn-danger">Delete</td>
    </tr>
  ))

  return(
    <div className="menuactions">
      <div className="row">
        <table className="table table-hover table-responsive">
          <thead>
            <th>Item</th>
            <th>Price</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {mapMenu}
          </tbody>
        </table>
      </div>
    </div>
  );
}

MenuActions.propTypes = {
  allMenu: PropTypes.object.isRequired
}

export default MenuActions;
