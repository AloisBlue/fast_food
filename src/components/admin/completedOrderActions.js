import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { completeOrder } from "../../actions/order";

// eslint-disable-next-line
class CompletedOrderActions extends Component {

  render() {
    const { adminOrders } = this.props;
    const ordersView = adminOrders.orders.map(order => (
      (order.status.accepted === true) ? (
        <tr key={order.item} className="">
          <td>{order.user.userName}</td>
          <td>{order.id}</td>
          <td>{order.item}</td>
          <td>{order.quantity}</td>
          <td>{order.price}</td>
          <td className={order.completed ? "bg-success text-white" : ""}>
            {order.completed ?
              ('Completed') :
              (<button
                type="button"
                className="btn btn-light text-warning"
                onClick={() => {
                  this.props.completeOrder(order.id);
                }}
              >
                Finish
              </button>)}
          </td>
        </tr>
      ) : (
        null
      )
    ))

    return (
      <div className="orderactions">
      <div className="card card-body">
        <table className="table table-hover table-responsive">
          <thead>
            <th>Ordered By</th>
            <th>Order Id</th>
            <th>Order</th>
            <th>Amount of Items</th>
            <th>Total Amount</th>
            <th>{}</th>
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

CompletedOrderActions.propTypes = {
  completeOrder: PropTypes.func.isRequired,
  adminOrders: PropTypes.object.isRequired
}

export default connect(null, { completeOrder })(CompletedOrderActions);
