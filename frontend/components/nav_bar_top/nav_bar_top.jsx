import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavBarTop = props => {
  return (
    <div className="top-nav">
      {/* <div className="hamburger" onClick={props.openModal}>
        <i className="fas fa-bars"></i>
      </div> */}
      {props.otherNav}
      <GreetingContainer />
    </div>
  );
}

export default NavBarTop;