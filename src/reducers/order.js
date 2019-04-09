import { MAKE_ORDER } from "../types";

const initial = {}

const orders = (state = initial, action = {}) => {
  switch(action.type) {
    case MAKE_ORDER:
      return action.payload;
    default:
      return state;
  }
}

export default orders;
