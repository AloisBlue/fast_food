import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MenuItems extends Component {
  state = {
    more: false
  }

  render() {
    const { more } = this.state;
    const { menu } = this.props;
    let moreView;

    if (more) {
      moreView = (
        <p style={{width: '200px'}}>{menu.description}</p>
      )
    }

    return(
      <div className="menuActions">
        <div className="card bg-pinkish col-12 text-center mb-3 mr-2 p-3">
          <div className="row">
            <div className="m-auto card">
              <h5 className="bg-warning">{menu.item}</h5>
              <img
                className="bg-info"
                src={`http://localhost:8080/${menu.menuImage}`}
                width="200"
                height="200"
                alt="food"
              />
              {menu.price > 0 ?  (
                <p className="bg-dark text-light">
                  Price: <small className="text-danger lead">{menu.price}</small>/=
                </p>
              ) : (
                <p className="bg-dark text-light">
                  <small className="text-danger lead" style={{fontStyle: 'italic'}}>...Free Offer...</small>
                </p>
              )}
              <button
                type="button"
                onClick={() => {
                  this.setState(prevState => ({
                    more: !prevState.more
                  }))
                }}
                className="btn text-maroon"
              >
                {more ? ('less') : ('more')}
              </button>
              <span>{moreView}</span>
              <Link to={`/menu/${menu.category}/${menu._id}`} className="btn btn-success btn-block">Order</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuItems.propTypes = {
  menu: PropTypes.object.isRequired
}

export default MenuItems;
