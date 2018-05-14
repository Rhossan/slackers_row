import {fetchSingleChannel, createChannel, fetchAllChannels} from '../util/channel_api_util';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_NEW_CHANNEL = 'RECEIVE_NEW_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';


export const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const requestChannel = (id) => dispatch => {
  // dispatch(startLoadingSingleChannel());
  debugger
  return fetchSingleChannel(id).then(payload => {
    return dispatch({type: RECEIVE_CHANNEL, payload});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}

export const makeChannel = (channel) => dispatch => {
  return createChannel(channel).then(channel => {
    return dispatch({type: RECEIVE_NEW_CHANNEL, channel});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}

export const requestAllChannels = () => dispatch => {
  return fetchAllChannels().then(channels => {
    return dispatch({type: RECEIVE_ALL_CHANNELS, channels});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}
