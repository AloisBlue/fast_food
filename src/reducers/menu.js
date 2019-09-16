import { GET_ALL_MENU, MENU_LOADING, GET_SINGLE_MENU, UPDATE_MENU,
  ADD_MENU, DELETE_MENU, GET_MENU_BY_CATEGORY } from "../types";

const initial = {
  allMenu: null,
  singleMenu: null,
  categoryMenu: null,
  loading: false
}

const menu = (state = initial, action = {}) => {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_MENU:
      return {
        ...state,
        allMenu: action.payload,
        loading: false
      }
    case GET_SINGLE_MENU:
      return {
        ...state,
        singleMenu: action.payload,
        loading: false
      };
    case ADD_MENU:
      return {
        ...state,
        singleMenu: action.payload
      };
    case UPDATE_MENU:
      return {
        ...state,
        singleMenu: action.payload
      };
    case DELETE_MENU:
      return {
        ...state
      };
    case GET_MENU_BY_CATEGORY:
      return {
        ...state,
        categoryMenu: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default menu;
