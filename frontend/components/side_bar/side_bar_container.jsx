import {connect} from 'react-redux';
import Sidebar from './side_bar';
import {logout} from '../../actions/session_actions';
import {selectAllChannels} from '../../reducers/selectors';
import {requestAllChannels} from '../../actions/channel_actions';

const mapStateToProps = (state) => {
  return {
    currentUser : state.entities.users[state.session.id],
    channels: selectAllChannels(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestAllChannels: () => dispatch(requestAllChannels())

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
