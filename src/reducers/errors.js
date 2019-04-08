import { GET_ERRORS, CLEAR_ERROR } from "../types";

const initial = {}

const errors = (state = initial, action = {}) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERROR:
      return initial;
    default:
      return state;
  }
}

export default errors;
