import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavBarTop = props => {
  return (
    <div>
      <GreetingContainer />
    </div>
  );
}

export default NavBarTop;