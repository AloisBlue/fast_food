import {  combineReducers } from "redux";
import user from "./reducers/auth";
import errors from "./reducers/errors";
import menu from "./reducers/menu";

export default combineReducers ({
  user,
  errors,
  menu
});
