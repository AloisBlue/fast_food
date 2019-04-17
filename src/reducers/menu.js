import { GET_ALL_MENU, MENU_LOADING, GET_SINGLE_MENU, UPDATE_MENU,
  ADD_MENU } from "../types";

const initial = {
  allMenu: null,
  singleMenu: null,
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
    default:
      return state;
  }
}

export default menu;
