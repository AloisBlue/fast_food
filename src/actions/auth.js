import { USER_REGISTERED, GET_ERRORS } from "../types";
import api from "../api";

export const registerUser = (data) => ({
  type: USER_REGISTERED,
  payload: data
});

export const getErrors = (err) => ({
  type: GET_ERRORS,
  payload: err.response.data
});

export const signup = (addUser, history) => (dispatch) => {
  api.user
    .signup(addUser)
    .then(user => {
      dispatch(registerUser(user))
      history.push("/login");
    })
    .catch(err => {
      dispatch(getErrors(err))
    });
}
