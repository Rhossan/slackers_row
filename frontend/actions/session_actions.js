import {createUser, loginUser, logoutUser} from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return loginUser(user).then(currentUser => {
    return dispatch({type: RECEIVE_CURRENT_USER, currentUser});
  }),err => {
      return dispatch(receiveErrors(err.responseJSON));
  };
};


export const logout = () => dispatch => {
  return logoutUser().then(() => {
    return dispatch({type: LOGOUT_USER});
  }),err => {
      return dispatch(receiveErrors(err.responseJSON));
  };
};

export const create = (user) => dispatch => {
  return createUser(user).then((currentUser) => {
    return dispatch({type: RECEIVE_CURRENT_USER, currentUser});
  }), err => {
      return dispatch(receiveErrors(err.responseJSON));
  };
};
