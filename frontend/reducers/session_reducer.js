import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
//*********state is not null?
const sessionReducer = (state = {id:null}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id : action.currentUser.id };
    case LOGOUT_USER:
      return {id:null};
    default:
      return state;
  }
};

export default sessionReducer;
