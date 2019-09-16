import { USER_REGISTERED, USER_LOGGED_IN, CLEAR_CURRENT_USER, USER_LOGGED_OUT } from "../types";
import isEmpty from "../validations/isEmpty";

const initial = {
  isAuthenticated: false,
  user: {}
}

const user = (state = initial, action = {}) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOGGED_OUT:
      return initial;
    case CLEAR_CURRENT_USER:
      return initial;
    default:
      return state;

  }
}

export default user;
