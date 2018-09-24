import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {selectAllChannels} from '../../reducers/selectors';
import {closeModal} from '../../actions/modal_actions';
import CreateChannel from './create_channel';
import {makeChannel, requestChannel} from '../../actions/channel_actions';

const mapStateToProps = (state) => {
  return {
    currentUser : state.entities.users[state.session.id],
    channels: selectAllChannels(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(makeChannel(channel)),
    requestChannel: (id) => dispatch(requestChannel(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannel));
