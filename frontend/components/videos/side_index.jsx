import React from 'react';
import SideIndexItem from './video_index_item';

class SideIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render(){
    // debugger

    let videos = this.props.videos.map( (video, index) => (
      <SideIndexItem key={index} video={video} />
    ));

    for (let i = videos.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [videos[i], videos[j]] = [videos[j], videos[i]];
    }
    
    return (
      <div className="side-index-outer-wrapper">
        <div className="recommended">Recommended</div>
        <ul className="side-index-wrapper">
          {videos}
        </ul>
      </div>
    );
  }
}

export default SideIndex;