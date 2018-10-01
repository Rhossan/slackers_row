import {connect} from 'react-redux';
import Sidebar from './side_bar';
import {logout} from '../../actions/session_actions';
import {selectAllChannels, selectAllDMs} from '../../reducers/selectors';
import {requestAllChannels, requestChannel, makeChannel} from '../../actions/channel_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  debugger
  const currentUser = state.entities.users[state.session.id]
  const channels = selectAllChannels(state);
  let dms = channels.filter(channel => {
    // console.log(channel.members.includes(currentUser.id));
    return (channel.members.some(e => currentUser.id) && (channel.channel_type == 'direct_message'));
    // && (channel.members.indexOf(currentUser.id) != -1)
  });
  console.log('hello')
  // let new_dms = [];
  // for(let i = 0; i < dms.length; i++){
  //   if(dms[i].members.includes(currentUser.id)) new_dms.push(dms[i]);
  // }

  const publicChannels = channels.filter(channel => channel.channel_type == 'channel');
  return {
    currentUser,
    publicChannels,
    dms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestAllChannels: () => dispatch(requestAllChannels()),
    requestChannel: (id) => dispatch(requestChannel(id)),
    createChannel: (channel) => dispatch(makeChannel(channel)),
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
