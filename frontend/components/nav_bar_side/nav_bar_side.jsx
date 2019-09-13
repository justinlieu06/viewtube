import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSide = props => {

  return (
    <div className="NavBarSide">
      {props.closeModal}
      <div className="viewtube">ViewTube</div>
    </div>
  )
};

export default NavBarSide;