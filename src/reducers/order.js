import { MAKE_ORDER, GET_ORDERS, ORDER_LOADING } from "../types";

const initial = {
  orders: null,
  order: null,
  loading: false
}

const orders = (state = initial, action = {}) => {
  switch(action.type) {
    case MAKE_ORDER:
      return action.payload;
    case ORDER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default orders;
