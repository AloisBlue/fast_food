import React from "react";
import PropTypes from "prop-types";

const OrderActions = ({ adminOrders }) => {
  console.log(adminOrders);
  const ordersView = adminOrders.orders.map(order => (
    <tr key={order.item} className="">
      <td>{order.user.userName}</td>
      <td>{order.id}</td>
      <td>{order.item}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
      <td className="btn-edit">Accept</td>
      <td className="btn-delete">Decline</td>
    </tr>
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

OrderActions.propTypes = {
  adminOrders: PropTypes.object.isRequired
}

export default OrderActions;
