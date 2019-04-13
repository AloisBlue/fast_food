import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/menu";
import MenuItems from "./menuActions";
import Search from "./search";

class MainMenu extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    const { allMenu, loading } = this.props;
    // console.log(allMenu, loading);
    let menuItems;
    let searchView;

    if (allMenu === null || loading) {
      menuItems = <p>Loading ...</p>
    } else if (allMenu.menu.length > 0) {
      searchView = <Search allMenu={allMenu} />
      menuItems = allMenu.menu.map(menu => (
        <div className="float-left mr-1">
          <MenuItems key={menu._id} menu={menu} />
        </div>
      ))
    } else {
      menuItems = <h4>No menu available ...</h4>
    }
    return (
      <div className="mainmenu">
        <div className="container">
          <h5 className="text-center text-maroon">Prepared by the best...make order</h5>
          <div className="clearfix">
            <div className="float-right mb-4 mr-4">
              {searchView}
            </div>
          </div>
          <div>
            <span>{ menuItems }</span>
          </div>
        </div>
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
