import React from 'react';

import NavBarTopContainer from './nav_bar_top/nav_bar_top_container';
import NavBarSideContainer from './nav_bar_side/nav_bar_side_container';
import VideoIndexContainer from './videos/video_index_container';
import Modal from './nav_bar_side/modal';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-wrapper">
      <NavBarTopContainer />

      <Modal />
      
      <VideoIndexContainer />

      <div className="default-nav">

        <Link to={`/`} className="default-link">
          <div className="default-link-wrapper">
            <i className="fas fa-home fa-2x" id="default-icon"></i>
            <div className="default-text">Home</div>
          </div>
        </Link>

        <Link to={`/upload`} className="default-link">
          <div className="default-link-wrapper">
            <i className="fas fa-video fa-2x" id="default-icon"></i>
            <div className="default-text">Upload</div>
          </div>
        </Link>

        <a href="https://github.com/JustinLieu06" className="default-link" target="_blank">        
          <div className="default-link-wrapper">
          <i className="fab fa-github fa-2x" id="default-icon-2"></i>
            <div className="default-text">Github</div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/justin-lieu-024744150/" className="side-a" target="_blank">              
          <div className="default-link-wrapper">
            <i className="fab fa-linkedin fa-2x" id="default-icon-2"></i>
            <div className="default-text">Linkedin</div>
          </div>
        </a>

        <a href="https://www.youtube.com/" className="side-a" target="_blank">
          <div className="default-link-wrapper">
            <i className="fab fa-youtube fa-2x" id="default-icon"></i>
            <div className="default-text">Original</div>
          </div>
        </a>

      </div>

    </div>
  );
};

export default Splash;