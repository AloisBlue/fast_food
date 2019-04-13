import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const UserPage = ({ isAuthenticated, isAdmin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated && isAdmin) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

UserPage.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
  isAuthenticated: state.user.isAuthenticated,
  isAdmin: state.user.user.isAdmin
});

export default connect(mapStateToProps)(UserPage);
