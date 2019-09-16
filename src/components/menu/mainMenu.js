import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/menu";
import MainMenuItems from "./mainMenuActions";
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
      menuItems = allMenu.menu.map(menu =>
        <div className="float-left mr-1">
          <MainMenuItems key={menu[0].category} menu={menu} />
        </div>
      )
    } else {
      menuItems = <h4>No menu available ...</h4>
    }
    return (
      <div className="mainmenu">
        <div className="container">
          <div className="card m-auto bg-black">
            <h3 className="text-center m-auto text-white"><i>Menu by Category</i></h3>
          </div>
          <h5 className="text-center text-maroon">Prepared by the best...make order</h5>
          <div className="clearfix">
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
