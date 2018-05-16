import {createMessage} from '../util/message_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const makeMessage = (message) => dispatch => {
  return createMessage(message).then(payload => {
    return dispatch({type: RECEIVE_MESSAGE, payload});
  }), err => {
    return dispatch(receiveErrors(err.responseJSON));
  };
}
