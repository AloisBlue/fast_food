import React from "react";
import PropTypes from "prop-types";

const OrderItems = ({ orders }) => {

  const orderDisplay = orders.orders.map(order => (
    <tr key={order.id}>
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
    </tr>
  ))
  return (
    <div className="orderitems">
    <p className="card lead text-center bg-black text-white p-1">Orders History</p>
      <table className="table table-hover table-responsive">
        <thead>
          <th>Order Id</th>
          <th>Order</th>
          <th>Amount of Items</th>
          <th>Total Price</th>
          <th>Status</th>
        </thead>
        <tbody>
          {orderDisplay}
        </tbody>
      </table>
    </div>
  );
}

OrderItems.propTypes = {
  orders: PropTypes.object.isRequired
}

export default OrderItems;
