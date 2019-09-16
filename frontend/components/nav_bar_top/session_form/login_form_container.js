import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {logIn, clearErrors} from '../../../actions/session_actions';
import LogInForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: 'login',
  navLink: <Link to="/signup" className="form-link">Create account</Link>
});

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);