import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import NavBarSide from './nav_bar_side';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  modal: state.ui.modal,
  navType: 'side'
});

const mapDispatchToProps = dispatch => ({
  otherNav: ( 
    <button onClick={() => dispatch(openModal('navBarSide'))}>
      HAM
    </button>
  ),
  closeModal: (
    <button className="close-hamburger" onClick={() => dispatch(closeModal())}>
      <i className="fas fa-bars"></i>  
    </button>
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSide);