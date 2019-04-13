import React from "react";
import PropTypes from "prop-types";

const CompletedOrderActions = ({ adminOrders }) => {
  console.log(adminOrders);
  const ordersView = adminOrders.orders.map(order => (
    <tr key={order.item} className="">
      <td>{order.user.userName}</td>
      <td>{order.id}</td>
      <td>{order.item}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
      <td className={order.completed ? ('btn-success') : ('btn-light text-warning')}>
        {order.completed ? ('Completed') : ('Finish')}
      </td>
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

CompletedOrderActions.propTypes = {
  adminOrders: PropTypes.object.isRequired
}

export default CompletedOrderActions;
