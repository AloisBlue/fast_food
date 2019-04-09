import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/menu";
import MenuItems from "./menuActions";

class MainMenu extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    const { allMenu, loading } = this.props;
    // console.log(allMenu, loading);
    let menuItems;

    if (allMenu === null || loading) {
      menuItems = <p>Loading ...</p>
    } else if (allMenu.menu.length > 0) {
      menuItems = allMenu.menu.map(menu => (
        <MenuItems key={menu._id} menu={menu} />
      ))
    } else {
      menuItems = <h4>No menu available ...</h4>
    }
    return (
      <div className="mainmenu">
        <h4 className="text-center text-maroon">Hot Stuff...Prepared by the best</h4>
        <p className="text-center">Make an order now!!!</p>
        <span>{ menuItems }</span>
      </div>
    );
  }
}

MainMenu.propTypes = {
  fetchMenu: PropTypes.func.isRequired,
  allMenu: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  allMenu: state.menu.allMenu,
  loading: state.menu.loading
});

export default connect(mapStateToProps, { fetchMenu })(MainMenu);
