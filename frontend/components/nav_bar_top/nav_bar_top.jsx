import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavBarTop = props => {
  let burger = props.otherNav;
  // let ham = props.closeModal;
  return (
    <div className="top-nav">
      {/* <div className="hamburger" onClick={props.openModal}>
        <i className="fas fa-bars"></i>
      </div> */}
      {burger}
      {/* {ham} */}
      <GreetingContainer />
    </div>
  );
}

export default NavBarTop;