import {  combineReducers } from "redux";
import user from "./reducers/auth";
import errors from "./reducers/errors";

export default combineReducers ({
  user,
  errors
});
