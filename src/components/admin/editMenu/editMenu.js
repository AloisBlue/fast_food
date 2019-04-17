import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSingleMenu } from "../../../actions/menu";
import EditMenuForm from "./editMenuForm";

class SingleMenu extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchSingleMenu(this.props.match.params.id);
    }
  }

  render() {
    const { singleMenu, loading } = this.props;
    let menuDisplay;

    if (singleMenu === null || loading) {
      menuDisplay = <p>loading...</p>
    } else if (singleMenu.length !== 0) {
      menuDisplay = <EditMenuForm singleMenu={singleMenu} />
    } else {
      menuDisplay = <p>No menu found</p>
    }


    return (
      <div className="singlemenu">
        <div className="container mb-3">
          <span>{menuDisplay}</span>
        </div>
      </div>
    );
  }
}

SingleMenu.propTypes = {
  fetchSingleMenu: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  singleMenu: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  singleMenu: state.menu.singleMenu,
  loading: state.menu.loading
})

export default connect(mapStateToProps, { fetchSingleMenu })(SingleMenu)
