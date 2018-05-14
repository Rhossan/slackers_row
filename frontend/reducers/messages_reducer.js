import merge from 'lodash/merge';

import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const messages_reducer = (state = {}, action) => {
  Object.freeze(state);
  debugger
  // console.log("hellooo");
  switch (action.type) {
    case RECEIVE_CHANNEL:
      // let messages = action.channel.messages;
      return merge({}, state, action.channel.messages);
    default:
      return state;
  }
};

export default messages_reducer;
