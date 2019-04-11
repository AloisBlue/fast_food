import { MAKE_ORDER, GET_ORDERS, ORDER_LOADING } from "../types";
import api from "../api";
import { getErrors, clearError } from "./auth";

export const newOrder = data => ({
  type: MAKE_ORDER,
  payload: data
});

export const getUserOrders = data => ({
  type: GET_ORDERS,
  payload: data
});

export const orderLoading = () => ({
  type: ORDER_LOADING
})

export const makeOrder = (addUser, history) => (dispatch) => {
  api.order
    .makeOrder(addUser)
    .then(order => {
      dispatch(clearError())
      dispatch(newOrder(order))
      history.push("/orders");
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
}

export const getOrders = () => (dispatch) => {
  dispatch(orderLoading())
  api.order
    .getOrders()
    .then(order => {
      dispatch(clearError())
      dispatch(getUserOrders(order));
    })
    .catch(err => {
      dispatch(getErrors(err));
    })
}
