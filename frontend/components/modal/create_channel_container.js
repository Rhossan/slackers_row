import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {closeModal} from '../../actions/modal_actions';
import CreateChannel from './create_channel';
import {makeChannel} from '../../actions/channel_actions';

const mapStateToProps = (state) => {
  return {
    currentUser : state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(makeChannel(channel))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannel));
