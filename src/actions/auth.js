import jwtDecode from "jwt-decode";
import { USER_REGISTERED, GET_ERRORS, USER_LOGGED_IN, CLEAR_ERROR,
          USER_LOGGED_OUT,CLEAR_CURRENT_USER } from "../types";
import api from "../api";
import setAuthToken from "../utils/setAuthToken";

export const registerUser = (data) => ({
  type: USER_REGISTERED,
  payload: data
});

export const loginUser = data => ({
  type: USER_LOGGED_IN,
  payload: data
});

export const logoutUser = () => ({
  type: USER_LOGGED_OUT
});

export const getErrors = (err) => ({
  type: GET_ERRORS,
  payload: err.response.data
});

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: {}
});

export const clearCurrent = () => ({
  type: CLEAR_CURRENT_USER
});

export const signup = (addUser, history) => (dispatch) => {
  api.user
    .signup(addUser)
    .then(user => {
      dispatch(registerUser(user))
      history.push("/login");
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
}

export const login = (credentials, history) => (dispatch) => {
  api.user
    .login(credentials)
    .then(user => {
      localStorage.rosewoodJwt = user.token;
      setAuthToken(user.token)
      dispatch(clearError());
      dispatch(loginUser(jwtDecode(user.token)))
      history.push("/orders");
    })
    .catch(err => {
      dispatch(getErrors(err));
    })
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("rosewoodJwt");
  setAuthToken(false);
  dispatch(logoutUser());
}

export const clearCurrentUser = () => (dispatch) => {
  dispatch(clearCurrent());
}
