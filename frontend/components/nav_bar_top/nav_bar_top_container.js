import { connect } from 'react-redux';
import React from 'react';
import NavBarTop from './nav_bar_top';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  modal: state.ui.modal,
  navType: 'top'
});

const mapDispatchToProps = dispatch => ({
  otherNav: ( 
    <button className="hamburger" onClick={() => dispatch(openModal('navbarside'))}>
      <i className="fas fa-bars"></i>  
    </button>),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarTop);