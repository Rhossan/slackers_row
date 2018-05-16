import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { create } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">login instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(create(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
