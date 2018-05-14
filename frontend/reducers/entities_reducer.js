import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import channelReducer from './channels_reducer';
import messagesReducer from './messages_reducer';

export default combineReducers({
  messages:messagesReducer,
  channels:channelReducer,
  users:usersReducer
});
