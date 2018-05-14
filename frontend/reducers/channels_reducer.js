import {RECEIVE_NEW_CHANNEL, RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS} from '../actions/channel_actions';
import merge from 'lodash/merge';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  let channel;
  debugger
  // console.log("eyyyy")
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, action.channels)
    case RECEIVE_CHANNEL:
      channel = action.payload.channel;
      return merge({}, state, { [channel.id]: channel });
    case RECEIVE_NEW_CHANNEL:
      // channel = action.channel;
      return merge({}, state, { [action.channel.channel.id]: action.channel.channel });
    default:
      return state;
  }
};

export default channelReducer;
