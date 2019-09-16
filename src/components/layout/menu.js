import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/menu";
import MenuItems from "../menu/menuActions";
import Spinner from "../../common/spinner";

class MainMenu extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    const { allMenu, loading } = this.props;
    let menuItems;

    if (allMenu === null || loading) {
      menuItems = <Spinner />
    } else if (allMenu.menu.length > 0) {
      // combine all the available arrays into one array.
      menuItems = Array.prototype.concat(...allMenu.menu).slice(0, 4).map(menu => (
        <div className="float-left mr-1">
          <MenuItems key={menu._id} menu={menu} />
        </div>
      ))
    } else {
      menuItems = <h4>No menu available ...</h4>
    }
    return (
      <div className="mainmenu">
        <h4 className="text-center text-maroon">A taste of our products</h4>
        <div>
          <span>{ menuItems }</span>
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
