import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCheck } from "@fortawesome/free-solid-svg-icons";
import CompletedOrderActions from "./completedOrderActions";
import { adminGetOrders } from "../../actions/order";
import Spinner from "../../common/spinner";

class AdminOrders extends Component {
  componentDidMount() {
    this.props.adminGetOrders();
  }

  render() {
    const { adminOrders, loading } = this.props;
    let adminView;

    if (adminOrders === null || loading) {
      adminView = <Spinner />
    } else if (adminOrders.count > 0) {
      adminView = <CompletedOrderActions adminOrders={adminOrders} />
    } else {
      adminView = <p>No orders available</p>
    }

    return(
      <div className="adminorders">
        <div className="container">
          <nav className="navbar">
            <ul className="nav nav-bar mb-2">
              <li className="nav-item">
                <Link className="btn maroon nav-link" to="/admin"><FontAwesomeIcon icon={faList} /> Manage Orders Received</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-warning nav-link" to="/complete"><FontAwesomeIcon icon={faCheck} /> Manage Orders Completion</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-warning nav-link" to="/managemenu"><FontAwesomeIcon icon={faList} /> Manage Menu</Link>
              </li>
            </ul>
          </nav>
          <div className="row">
            <div className="card card-body mb-2">
              <p className="card lead text-center bg-black text-white p-1">Complete Orders</p>

              {adminView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminOrders.propTypes = {
  loading: PropTypes.bool.isRequired,
  adminGetOrders: PropTypes.func.isRequired,
  adminOrders: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  adminOrders: state.order.adminOrders,
  loading: state.order.loading
});

export default connect(mapStateToProps, { adminGetOrders })(AdminOrders);
