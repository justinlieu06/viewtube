import { connect } from 'react-redux';
import React from 'react';
import NavBarTop from './nav_bar_top';
import {withRouter} from 'react-router-dom';

import { openModal, closeModal } from '../../actions/modal_actions';
import { searchVideos } from '../../actions/video_actions';

const mapStateToProps = state => ({
  modal: state.ui.modal,
  navType: 'top'
});

const mapDispatchToProps = dispatch => ({
  otherNav: ( 
    <button className="open-hamburger" onClick={() => dispatch(openModal('navbarside'))}>
      <i className="fas fa-bars"></i>  
    </button>),
  closeModal: () => dispatch(closeModal()),
  searchVideos: () => dispatch(searchVideos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarTop));