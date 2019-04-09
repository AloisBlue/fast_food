import { MAKE_ORDER } from "../types";
import api from "../api";
import { getErrors, clearError } from "./auth";

export const newOrder = data => ({
  type: MAKE_ORDER,
  payload: data
});

export const makeOrder = (addUser, history) => (dispatch) => {
  api.order
    .makeOrder(addUser)
    .then(order => {
      dispatch(clearError());
      dispatch(newOrder(order));
      history.push("/order");
    })
    .catch(err => {
      dispatch(getErrors(err));
    })
}
