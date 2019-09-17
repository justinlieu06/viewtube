import React from 'react';

import NavBarTopContainer from './nav_bar_top/nav_bar_top_container';
import NavBarSideContainer from './nav_bar_side/nav_bar_side_container';
import VideoIndexContainer from './videos/video_index_container';
import Modal from './nav_bar_side/modal';

const Splash = () => {
  return (
    <div className="splash-wrapper">
      <NavBarTopContainer />
      {/* <NavBarSideContainer /> */}
      <Modal />
      <VideoIndexContainer />
    </div>
  );
};

export default Splash;