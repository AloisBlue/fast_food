import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchMenuByCategory } from "../../actions/menu";
import MenuActions from "./menuActions";
import Spinner from "../../common/spinner";

class MenuCategory extends Component {

  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.fetchMenuByCategory(this.props.match.params.category);
    }
  }

  render() {
    const { categoryMenu, loading } = this.props;
    let menuItems;
    let categoryTitle;

    if (categoryMenu === null || loading) {
      menuItems = <Spinner />
    } else if (categoryMenu.menu.length > 0) {
      categoryTitle = <p>{categoryMenu.menu[0].category}</p>
      menuItems = categoryMenu.menu.map(menu =>
        <div className="float-left mr-1">
          <MenuActions key={menu.category} menu={menu} />
        </div>
      )
    } else {
      menuItems = <h4>No menu available</h4>
    }
    return (
      <div className="menucategory">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto">
              <h5 className="text-center text-maroon">Prepared by the best...make order</h5>
              <div className="bg-black">
                <span className="text-center text-white lead">{ categoryTitle }</span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    this.props.history.push("/menu")
                  }}
                  className="btn btn-white text-black"
                >
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to Main Menu
                </button>
              </div>
              <div className="clearfix">
              </div>
              <div>
                <span>{ menuItems }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuCategory.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  fetchMenuByCategory: PropTypes.func.isRequired,
  categoryMenu: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  categoryMenu: state.menu.categoryMenu,
  loading: state.menu.loading
})

export default connect(mapStateToProps, { fetchMenuByCategory })(MenuCategory);
