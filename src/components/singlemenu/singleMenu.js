import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSingleMenu } from "../actions/menu";

class SingleMenu extends Component {
  componentDidMount() {
    this.props.fetchSingleMenu();
  }

  render() {
    return (
      <div>
        <p>SingleMenu</p>
      </div>
    );
  }
}

SingleMenu.propTypes = {
  fetchSingleMenu: PropTypes.func.isRequired
}

export default connect(null, { fetchSingleMenu })(SingleMenu)
