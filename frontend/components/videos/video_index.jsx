import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render(){
    <div>
      
    </div>
  }
}

export default VideoIndex;