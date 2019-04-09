import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSingleMenu } from "../../actions/menu";
import MenuDetails from "./menuDetails";

class SingleMenu extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchSingleMenu(this.props.match.params.id);
    }
  }

  render() {
    const { singleMenu, loading } = this.props;
    let menuDisplay;
    console.log(loading, singleMenu);

    if (singleMenu === null || loading) {
      menuDisplay = <p>loading...</p>
    } else if (singleMenu.length !== 0) {
      menuDisplay = <MenuDetails singleMenu={singleMenu} />
    } else {
      menuDisplay = <p>No menu found</p>
    }


    return (
      <div className="singlemenu">
        <div className="container">
          <div className="col-md-10 m-auto">
            <div className="card bg-pinkish">
              <p>{menuDisplay}</p>
            </div>
          </div>
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
