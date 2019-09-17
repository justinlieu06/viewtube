import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render(){
    // debugger

    let videos = this.props.videos.map( (video, index) => (
      <VideoIndexItem key={index} video={video} />
    ));
    
    return (
      <div className="video-index-outer-wrapper">
        <div className="recommended">Recommended</div>
        <ul className="video-index-wrapper">
          {videos}
        </ul>
      </div>
    );
  }
}

export default VideoIndex;