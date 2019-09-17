import React from 'react';
import { Link } from 'react-router-dom';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import Modal from '../nav_bar_side/modal';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
    }
  }

  componentDidMount(){
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    if (this.props.video === undefined){
      return null;
    }
    return(
      <div className="vid-show">
        <NavBarTopContainer />
        <Modal />

        <div className="outer-vid-wrapper">
          <div className="vid-wrapper">
            <video key={this.props.video.id} width='300px' className='video-show-player' controls>
              <source src={this.props.video.video} type="video/mp4" />
            </video>

            {/* <span className="vid-title">
              {this.props.video.title}
            </span> */}
          </div>

          <div className="vid-index-wrapper">
            TO DO: LIST OF VIDS
          </div>
        </div>

        <div className="vid-show-wrapper"></div>
      </div>
    )
  }
}

export default VideoShow;
