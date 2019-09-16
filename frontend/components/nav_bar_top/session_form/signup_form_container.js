import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp, clearErrors } from '../../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: 'signup',
  navLink: <Link to="/login" className="form-link">Sign in instead</Link>
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);