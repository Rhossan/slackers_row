import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import App from './components/app';
import {createUser, loginUser, logoutUser} from './util/session_api_util';
import {login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  // window.loginUser = loginUser;
  // window.logoutUser = logoutUser;
  // window.createUser = createUser;
  ReactDOM.render(<Root store={store}/>, root);
});
