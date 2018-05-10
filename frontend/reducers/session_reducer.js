import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
//*********state is not null?
const sessionReducer = (state = {id:null}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    //*****receive current user with ID as key, nvm do that in user reducer..
      return { id : action.currentUser.id };
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
};

export default sessionReducer;
