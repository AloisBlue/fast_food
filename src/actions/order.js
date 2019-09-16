import { MAKE_ORDER, GET_ORDERS, ORDER_LOADING, ADMIN_GET_ORDERS,
          ACCEPT_ORDER, GET_SINGLE_ORDER, DECLINE_ORDER,
          COMPLETE_ORDER, DELETE_ORDER} from "../types";
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

export const getAdminOrders = data => ({
  type: ADMIN_GET_ORDERS,
  payload: data
});

export const orderLoading = () => ({
  type: ORDER_LOADING
});

export const acceptAnOrder = data => ({
  type: ACCEPT_ORDER,
  payload: data
});

export const getAnOrder = data => ({
  type: GET_SINGLE_ORDER,
  payload: data
});

export const declineAnOrder = data => ({
  type: DECLINE_ORDER,
  payload: data
});

export const completeAnOrder = data => ({
  type: COMPLETE_ORDER,
  payload: data
});

export const removeOrder = data => ({
  type: DELETE_ORDER,
  payload: data
});

export const makeOrder = (addUser, history) => (dispatch) => {
  api.order
    .makeOrder(addUser)
    .then(order => {
      dispatch(clearError())
      dispatch(newOrder(order))
      window.location.reload(true)
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

export const adminGetOrders = () => (dispatch) => {
  dispatch(orderLoading())
  api.order
    .adminGetOrders()
    .then(orders => {
      dispatch(clearError())
      dispatch(getAdminOrders(orders));
    })
    .catch(err => {
      dispatch(getErrors(err))
    })
}

export const acceptOrder = (id) => (dispatch) => {
  api.order
    .acceptOrder(id)
    .then(res => {
      dispatch(acceptAnOrder())
      dispatch(getAnOrder(res))
      window.location.reload(true)
    })
    .catch(err => {
      dispatch(getErrors(err))
    })
}

export const getOrder = id => (dispatch) => {
  dispatch(orderLoading())
  api.order
    .getOrder(id)
    .then(order => {
      dispatch(getAnOrder(order));
    })
    .catch(err => {
      dispatch(getErrors(err));
    })
}

export const declineOrder = id => (dispatch) => {
  api.order
    .declineOrder(id)
    .then(res => {
      dispatch(declineAnOrder())
      dispatch(getAnOrder(res))
      window.location.reload(true)
    })
    .catch(res => {
      dispatch(getErrors(res));
    })
}

export const completeOrder = id => (dispatch) => {
  api.order
    .completeOrder(id)
    .then(res => {
      dispatch(completeAnOrder())
      dispatch(getAnOrder(res))
      window.location.reload(true)
    })
    .catch(res => {
      dispatch(getErrors(res));
    })
}

export const deleteOrder = id => (dispatch) => {
  api.order
    .deleteOrder(id)
    .then(res => {
      dispatch(removeOrder(res));
      window.location.reload(true);
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
}
