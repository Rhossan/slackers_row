import {connect} from 'react-redux';
import ChannelDetail from './channel_detail';
import {logout} from '../../actions/session_actions';
import {selectChannelMessages} from '../../reducers/selectors';
import {requestChannel} from '../../actions/channel_actions';
import {makeMessage, receiveMessage} from '../../actions/message_actions';
import {requestAllChannels} from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const channel = state.entities.channels[ownProps.match.params.channelId] || { message_ids: [] };
  const messages = selectChannelMessages(state,channel)
  return {
    channel,
    messages,
    currentUser : state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestChannel: (id) => dispatch(requestChannel(id)),
    makeMessage: (message) => dispatch(makeMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    requestAllChannels: () => dispatch(requestAllChannels())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
