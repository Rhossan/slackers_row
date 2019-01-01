import {RECEIVE_NEW_CHANNEL, RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS} from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

import merge from 'lodash/merge';

const channelReducer = (state = {}, action) => {
  let channel;
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      debugger;
      return merge({}, state, action.channels)
    case RECEIVE_CHANNEL:
      debugger;
      channel = action.payload.channel;
      return merge({}, state, { [channel.id]: channel });
    case RECEIVE_NEW_CHANNEL:
      // channel = action.channel;
      debugger;
      return merge({}, state, { [action.channel.channel.id]: action.channel.channel });
    case RECEIVE_MESSAGE:
      const newState = merge({},state);
      newState[action.payload.channel_id].message_ids.push(action.payload.id);
      return newState;
    default:
      return state;
  }
};

export default channelReducer;
