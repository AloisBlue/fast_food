import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteOrder } from "../../actions/order";

class OrderItems extends Component {

  onClickDelete = (id) => {
    this.props.deleteOrder(id);
  }

  render() {
    const { orders } = this.props;
    const orderDisplay = orders.orders.map(order => (
      <tr key={order.id}>
        <td>
          <Moment format="ddd MMM DD, YYYY">{order.createdAt}</Moment>
        </td>
        <td>
          <Moment format="hh:mm:ss">{order.createdAt}</Moment>
        </td>
        <td>{order.id}</td>
        <td>{order.item}</td>
        <td>{order.quantity}</td>
        <td>{order.price}</td>
        <td>
          {order.status.accepted === order.status.rejected ?
            (<span className="text-warning">Active</span>) :
              order.status.accepted ?
              <span className="text-success">Accepted</span> :
                <span className="text-danger">Rejected</span>}
        </td>
        <td>
          {order.status.accepted === order.status.rejected ?
            null :
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={this.onClickDelete.bind(this, order.id)}
            >
              X
            </button>
          }
        </td>
      </tr>
    ))
    return (
      <div className="orderitems">
      <p className="card lead text-center bg-black text-white p-1">Orders History</p>
        <table className="table table-hover table-responsive">
          <thead>
            <th>Date</th>
            <th>Time</th>
            <th>Order Id</th>
            <th>Order</th>
            <th>Amount of Items</th>
            <th>Total Price</th>
            <th>Status</th>
            <th> <FontAwesomeIcon icon={faTrash} /> Delete</th>
          </thead>
          <tbody>
            {orderDisplay}
          </tbody>
        </table>
      </div>
    );
  }
}

OrderItems.propTypes = {
  deleteOrder: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired
}

export default connect(null, { deleteOrder })(OrderItems);
