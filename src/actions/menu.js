import { GET_ALL_MENU, MENU_LOADING, GET_SINGLE_MENU, ADD_MENU } from "../types";
import api from "../api";
import { getErrors, clearError } from "./auth";

export const getAllMenu = data => ({
  type: GET_ALL_MENU,
  payload: data
});

export const menuLoading = () => ({
  type: MENU_LOADING
});

export const getSingleMenu = data => ({
  type: GET_SINGLE_MENU,
  payload: data
});

export const makeMenu = data => ({
  type: ADD_MENU,
  payload: data
})

export const fetchMenu = () => (dispatch) => {
  dispatch(menuLoading());
  api.menu
    .fetchMenu()
    .then(menu => {
      dispatch(getAllMenu(menu));
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
}

export const fetchSingleMenu = id => (dispatch)  => {
  dispatch(menuLoading());
  api.menu
    .fetchSingleMenu(id)
    .then(menu => {
      dispatch(getSingleMenu(menu));
    })
    .catch(err => {
      dispatch(getErrors(err));
    })
}

export const newMenu = (addMenu, history) => (dispatch) => {
  api.menu
    .newMenu(addMenu)
    .then(menu => {
      dispatch(clearError())
      dispatch(makeMenu(menu))
      history.push("/managemenu")
    })
    .catch(err => {
      dispatch(getErrors(err))
    })
}
