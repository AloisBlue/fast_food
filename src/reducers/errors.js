import { GET_ERRORS } from "../types";

const initial = {}

const errors = (state = initial, action = {}) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

export default errors;
