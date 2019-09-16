import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import jwtDecode from "jwt-decode";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'semantic-ui';
import "bootstrap";
import App from './App';
import rootReducer from "./rootReducer";
import setAuthToken from "./utils/setAuthToken";
import { loginUser, logout } from "./actions/auth";
import * as serviceWorker from './serviceWorker';

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.rosewoodJwt) {
  // set auth headers
  setAuthToken(localStorage.rosewoodJwt)

  // set user & isAuthenticated
  store.dispatch(loginUser(jwtDecode(localStorage.rosewoodJwt)));

  // check expiration
  const currentTime = Date.now() /1000;

  if (jwtDecode(localStorage.rosewoodJwt).exp < currentTime) {
    store.dispatch(logout());
    window.location.href = '/';
    window.location.reload(true);
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
