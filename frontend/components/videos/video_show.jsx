import React from 'react';
import { Link } from 'react-router-dom';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import Modal from '../nav_bar_side/modal';
import SideIndexContainer from './side_index_container';

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
      <div className="vid-show-wrapper">
        <NavBarTopContainer />
        <Modal />
        <div className="vid-show">
          
          <div className="show-left">
          <div className="outer-vid-wrapper">
            <div className="vid-wrapper">
              <video key={this.props.video.id} width='100%' className='video-show-player' controls>
                <source src={this.props.video.video} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="vid-info">
            <div className="vid-title">
              {this.props.video.title}
            </div>
            <div className="vid-published">
              {this.props.video.published}
            </div>
            <hr />
            <div className="vid-username">
              <i className="fas fa-user-circle fa-3x"></i>
              {this.props.video.username}
            </div>
            <div className="vid-description">
              {this.props.video.description}
            </div>
          </div>
          </div>

          {/* <div className="vid-show-wrapper"></div> */}

          <div className="show-right"><SideIndexContainer /></div>
        </div>
      </div>
    )
  }
}

export default VideoShow;
