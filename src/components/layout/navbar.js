import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearCurrentUser, logout } from "../../actions/auth";

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.clearCurrentUser();
    this.props.logout();
  }

  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <div>
        <div className="banner" align="right">
          <p>Rosewood Food Sellers</p>
        </div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                  {
                    isAuthenticated ? (
                      <Link className="nav-link" to="/orders">Orders</Link>
                    ) : (
                      null
                    )
                  }
              </li>
              <li className="nav-item">
                  {
                    user.isAdmin ? (
                      <Link className="nav-link" to="/admin">Admin</Link>
                    ) : (
                      null
                    )
                  }
              </li>
            </ul>
            {
              isAuthenticated ? (
                <small className="text-success pr-3">Logged in as: {user.email}</small>
              ) : (
                null
              )
            }
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                    {
                      isAuthenticated ? (
                        null
                      ) : (
                        <Link className="nav-link" to="/signup">Signup</Link>
                      )
                    }
              </li>
              <li className="nav-item">
                  {
                    isAuthenticated ? (
                      // eslint-disable-next-line
                      <a
                        className="nav-link"
                        href=""
                        onClick={this.onLogoutClick.bind(this)}
                      >
                        Logout
                      </a>
                    ) : (
                      <Link className="nav-link" to="/login">Login</Link>
                    )
                  }
              </li>
            </ul>
          </div>
        </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  clearCurrentUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.user
})

export default  connect(mapStateToProps, { clearCurrentUser, logout })(Navbar);
