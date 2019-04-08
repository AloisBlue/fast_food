import { USER_REGISTERED } from "../types";
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
        isAuthenticated: !isEmpty(action.user),
        user: action.payload
      };
    default:
      return state;

  }
}

export default user;
