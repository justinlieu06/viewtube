import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {logIn} from '../../../actions/session_actions';
import LogInForm from './login_form';

const msp = state => ({
  // errors: state.errors.sessionErrors,
  formType: 'login',
  navLink: <Link to="/signup">sign up instead</Link>
});

const mdp = dispatch => ({
  processForm: user => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(LogInForm);