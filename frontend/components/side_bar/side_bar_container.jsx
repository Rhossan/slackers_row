import {connect} from 'react-redux';
import Sidebar from './side_bar';
import {logout} from '../../actions/session_actions';
import {selectAllChannels} from '../../reducers/selectors';
import {requestAllChannels, requestChannel, makeChannel} from '../../actions/channel_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser : state.entities.users[state.session.id],
    channels: selectAllChannels(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestChannel: (id) => dispatch(requestChannel(id)),
    createChannel: (channel) => dispatch(makeChannel(channel)),
    openModal: () => dispatch(openModal('channel')),
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
