import { MAKE_ORDER, GET_ORDERS, ORDER_LOADING, ADMIN_GET_ORDERS,
          ACCEPT_ORDER, GET_SINGLE_ORDER, DECLINE_ORDER, DELETE_ORDER,
          COMPLETE_ORDER } from "../types";

const initial = {
  adminOrders: null,
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
    case ADMIN_GET_ORDERS:
      return {
        ...state,
        adminOrders: action.payload,
        loading: false
      }
      case ACCEPT_ORDER:
        return {
          ...state
        };
      case GET_SINGLE_ORDER:
        return {
          ...state,
          order: action.payload,
          loading: false
        };
      case DECLINE_ORDER:
        return {
          ...state
        };
      case COMPLETE_ORDER:
        return {
          ...state
        };
      case DELETE_ORDER:
        return {
          ...state
        }
    default:
      return state;
  }
}

export default orders;
