import {connect} from 'react-redux';
import ChannelDetail from './channel_detail';
import {logout} from '../../actions/session_actions';
import {selectChannelMessages} from '../../reducers/selectors';
import {requestChannel} from '../../actions/channel_actions';
import {makeMessage} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  const channel = state.entities.channels[ownProps.match.params.channelId];
  return {
    channel,
    messages: selectChannelMessages(state,channel),
    currentUser : state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestChannel: (id) => dispatch(requestChannel(id)),
    makeMessage: (message) => dispatch(makeMessage(message))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
