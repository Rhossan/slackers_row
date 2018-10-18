import {fetchSingleChannel, createChannel, fetchAllChannels} from '../util/channel_api_util';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_NEW_CHANNEL = 'RECEIVE_NEW_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';


export const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const requestChannel = (id) => dispatch => {
  return fetchSingleChannel(id).then(payload => {
    return dispatch({type: RECEIVE_CHANNEL, payload});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}


export const makeChannel = (channel) => {
  return (dispatch) => {
    return createChannel(channel)
    .then(channel => dispatch({type: RECEIVE_NEW_CHANNEL, channel}));
  };
};

export const requestAllChannels = () => dispatch => {
  return fetchAllChannels().then(channels => {
    return dispatch({type: RECEIVE_ALL_CHANNELS, channels});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}
