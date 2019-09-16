import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavBarTop = props => {
  return (
    <div className="top-nav">
      {/* <div className="hamburger" onClick={props.openModal}>
        <i className="fas fa-bars"></i>
      </div> */}
      <div>
        {props.otherNav}
        <div className="youtube-icon"><i className="fab fa-youtube fa-rotate-180 fa-2x"></i></div>
        <div className="nav-viewtube">ViewTube</div>
      </div> 
      
      #PUT FORM CONTAINER HERE
      
      <GreetingContainer />
    </div>
  );
}

export default NavBarTop;