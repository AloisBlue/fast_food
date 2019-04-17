import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class MenuActions extends Component {

  onClickButton = (id) => {
    this.props.history.push(`/editmenu/${id}`);
  }

  render() {
    const { allMenu } = this.props;

    const mapMenu = allMenu.menu.map(menu => (
      <tr key={menu._id} className="">
        <td>{menu.item}</td>
        <td className="text-danger">{menu.price}</td>
        <td>{menu.description}</td>
        <td>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.onClickButton.bind(this, menu._id)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
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
}

MenuActions.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  allMenu: PropTypes.object.isRequired
}

export default (withRouter(MenuActions));
