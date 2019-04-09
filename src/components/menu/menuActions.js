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
      <div className="card col-3 text-center bg-pinkish mb-3 p-1">
        <div className="row">
          <div className="m-auto">
            <h5 className="bg-warning">{menu.item}</h5>
            <img
              className="bg-info"
              src={`http://localhost:8080/${menu.menuImage}`}
              width="200"
              height="200"
              alt="food"
            />
            <p className="bg-dark text-light">Price: <small className="text-danger lead">{menu.price}</small>/=</p>
            <p
              onClick={() => {
                this.setState(prevState => ({
                  more: !prevState.more
                }))
              }}
              className="text-maroon"
            >
              {more ? ('less') : ('more')}
            </p>
            <span>{moreView}</span>
            <Link to={`/menu/${menu._id}`} className="btn btn-success btn-block">Order</Link>
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
