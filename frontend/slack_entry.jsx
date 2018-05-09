import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import {createUser, loginUser, logoutUser} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.createUser = createUser;
  ReactDOM.render(<App />, root);
});
