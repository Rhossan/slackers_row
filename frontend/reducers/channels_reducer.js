import {RECEIVE_CHANNEL} from '../actions/channel_actions';
import merge from 'lodash/merge';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  let channel;
  debugger
  // console.log("eyyyy")
  switch (action.type) {
    case RECEIVE_CHANNEL:
      channel = action.channel;
      return merge({}, state, { [channel.channel.id]: channel.channel });
    default:
      return state;
  }
};

export default channelReducer;
