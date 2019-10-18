import React from 'react';
import SideIndexItem from './side_index_item';

class SideIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.video.id === this.props.video.id){
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render(){

    let videos = this.props.videos.map( (video, index) => (
      <SideIndexItem key={index} video={video} />
    ));

    for (let i = videos.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [videos[i], videos[j]] = [videos[j], videos[i]];
    }

    let filteredVideos = new Array(25);

    for (let i = 0; i < 25; i++){
      filteredVideos[i] = videos[i];
    }
    
    return (
      <div className="side-index-outer-wrapper">
        <div className="side-header">Up Next</div>
        {filteredVideos}
      </div>
    );
  }
}

export default SideIndex;