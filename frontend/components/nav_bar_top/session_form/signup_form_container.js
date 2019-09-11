import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  // errors: state.errors.sessionErrors,
  formType: 'signup',
  // navLink: <Link to="/login">login instead</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);