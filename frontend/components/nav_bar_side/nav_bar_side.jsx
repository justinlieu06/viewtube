import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSide = props => {

  return (
    <div className="NavBarSide">
      {props.closeModal}
      <Link to={`/`}><div className="youtube-icon"><i className="fab fa-youtube fa-rotate-180 fa-2x"></i></div></Link>
      <Link to={`/`}><div className="nav-viewtube">ViewTube</div></Link>
    </div>
  )
};

export default NavBarSide;