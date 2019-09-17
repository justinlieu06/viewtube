import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSide = props => {

  return (
    <div className="NavBarSide">
      {props.closeModal}
      <Link to={`/`}><div className="viewtube-icon"><i className="fab fa-youtube fa-rotate-180 fa-2x"></i></div></Link>
      <Link to={`/`}><div className="nav-viewtube">ViewTube</div></Link>
      
      <Link to={`/`} className="side-link">
        <div className="side-link-wrapper">
          <div className="side-icon-text">
            <i className="fas fa-home"></i>
            <div className="side-text">Home</div>
          </div>
        </div>
      </Link>

      <br />
      <br />

      <Link to={`/upload`} className="side-link">
        <div className="side-link-wrapper">
          <div className="side-icon-text">
            <i class="fas fa-video"></i>
            <div className="side-text">Upload</div>
          </div>
        </div>
      </Link>

      <br />
      <br />
      <hr />
      <br/>
      
      <a href="https://github.com/JustinLieu06" className="side-a" target="_blank">
        <div className="side-link-wrapper">
          <div className="side-icon-text">
            <i class="fab fa-github"></i>
            <div className="side-text">Github</div>
          </div>
        </div>
      </a>

      <br />
      <br />

      <a href="https://www.linkedin.com/in/justin-lieu-024744150/" className="side-a" target="_blank">
        <div className="side-link-wrapper">
          <div className="side-icon-text">
            <i class="fab fa-linkedin"></i>
            <div className="side-text">Linkedin</div>
          </div>
        </div>
      </a>

      <br />
      <br />

      <a href="https://www.youtube.com/" className="side-a" target="_blank">
        <div className="side-link-wrapper">
          <div className="side-icon-text">
            <i class="fab fa-youtube"></i>
            <div className="side-text">Original</div>
          </div>
        </div>
      </a>

      <br/>
      <br/>
      <hr />
      <br/>
      <div className="side-title">SUBSCRIPTIONS</div>
      <br/>
      <br/>
      <hr />
      <br/>
      <div className="side-title">MORE FROM VIEWTUBE</div>
      
    </div>
  )
};

export default NavBarSide;