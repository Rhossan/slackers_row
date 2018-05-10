import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import App from './components/app';
import {createUser, loginUser, logoutUser} from './util/session_api_util';
import {login,create, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.create = create;
  // window.logout = logout;
  // window.loginUser = loginUser;
  // window.logoutUser = logoutUser;
  // window.createUser = createUser;
  ReactDOM.render(<Root store={store}/>, root);
});
