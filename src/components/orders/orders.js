import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrders } from "../../actions/order";
import OrderItems from "./orderItems";
import Spinner from "../../common/spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { orders, loading } = this.props;
    let ordersView;
    if (orders === null || loading) {
      ordersView = <Spinner />
    } else if (orders.count > 0) {
      ordersView = <OrderItems orders={orders} />
    } else {
      ordersView = <p>No orders available for the user</p>
    }

    return (
      <div className="orders">
        <div className="container">
          <div className="row">
            <div className="card card-body m-auto">
              {ordersView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  orders: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading
})

export default connect(mapStateToProps, { getOrders })(Orders);
