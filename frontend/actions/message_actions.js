import {createMessage} from '../util/message_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const makeMessage = (message) => dispatch => {
  return createMessage(message).then(message => {
    return dispatch({type: RECEIVE_CHANNEL, message});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}
