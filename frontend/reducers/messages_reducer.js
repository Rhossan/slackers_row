import merge from 'lodash/merge';

import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messages_reducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.payload.messages;
    case RECEIVE_MESSAGE:
      return merge({}, state, {[action.payload.id]:action.payload})
    default:
      return state;
  }
};

export default messages_reducer;
