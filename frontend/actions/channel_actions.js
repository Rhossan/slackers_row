import {fetchSingleChannel, createChannel} from '../util/channel_api_util';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';


export const receiveErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const requestChannel = (id) => dispatch => {
  // dispatch(startLoadingSingleChannel());
  debugger
  return fetchSingleChannel(id).then(channel => {
    return dispatch({type: RECEIVE_CHANNEL, channel});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}

export const makeChannel = (channel) => dispatch => {
  return createChannel(channel).then(channel => {
    return dispatch({type: RECEIVE_CHANNEL, channel});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}
