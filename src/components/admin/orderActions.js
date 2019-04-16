import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { acceptOrder, declineOrder } from "../../actions/order";

// eslint-disable-next-line
class OrderActions extends Component {

  render() {
    const { adminOrders } = this.props;
    const {count} = adminOrders

    const ordersView = adminOrders.orders.map(order => (
      (order.status.accepted === false && order.status.rejected === false) ? (
        <tr key={order.item} className="">
          <td>{order.user.userName}</td>
          <td>{order.id}</td>
          <td>{order.item}</td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td>
            <button
              className="btn btn-edit"
              type="button"
              onClick={() => {
                this.props.acceptOrder(order.id);
              }}
            >
              Accept
            </button>
          </td>
          <td>
            <button
              className="btn btn-delete"
              type="button"
              onClick={() => {
                this.props.declineOrder(order.id);
              }}
            >
              Decline
            </button>
          </td>
        </tr>
      ) : (
        null
      )
    ))

    return (
      <div className="orderactions">
      <div className="card card-body">
        <p className="ml-2">Total orders received: <span className="badge">{count}</span></p>
        <small className="ml-2 text-danger">New</small>
        <table className="table table-hover table-responsive">
          <thead>
            <th>Ordered By</th>
            <th>Order Id</th>
            <th>Order</th>
            <th>Amount of Items</th>
            <th>Total Amount</th>
            <th>Accept</th>
            <th>Decline</th>
          </thead>
          <tbody>
            {ordersView}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

OrderActions.propTypes = {
  acceptOrder: PropTypes.func.isRequired,
  declineOrder: PropTypes.func.isRequired,
  adminOrders: PropTypes.object.isRequired
}

export default connect(null, { acceptOrder, declineOrder })(withRouter(OrderActions));
