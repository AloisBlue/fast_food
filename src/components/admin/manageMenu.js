import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/menu"
import MenuActions from "./menuActions";

class ManageMenu extends Component {

  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    const { allMenu, loading } = this.props;
    let menuView;

    if (allMenu ===null || loading) {
      menuView = <p>Loading...</p>
    } else if (allMenu.count > 0) {
      menuView = <MenuActions allMenu={allMenu} />
    } else {
      menuView = <p>No menu available</p>
    }

    return(
      <div className="adminorders">
        <div className="container">
          <nav className="navbar">
            <ul className="nav nav-bar mb-2">
              <li className="nav-item">
                <Link className="btn maroon nav-link" to="/admin">Manage Orders Received</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-warning nav-link" to="/complete">Manage Orders Completion</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-warning nav-link" to="/managemenu">Manage Menu</Link>
              </li>
            </ul>
          </nav>
          <Link className="btn btn-light text-maroon ml-3 mb-2" to="/addmenu">Add Menu Item</Link>
          <div className="row">
            <div className="card card-body mb-2">
              <h2 className="text-center">Manage Menu</h2>
              {menuView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ManageMenu.propTypes = {
  fetchMenu: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  allMenu: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  allMenu: state.menu.allMenu,
  loading: state.menu.loading
});

export default connect(mapStateToProps, { fetchMenu })(ManageMenu);
