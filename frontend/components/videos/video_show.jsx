import React from 'react';
import { Link } from 'react-router-dom';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container'

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
    }
    console.log("hi");

  }

  componentDidMount(){
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
    // debugger
    return(
      <video key={this.state.video.id} width='300px' height='300px' className='video-show-player' controls>
        <source src={this.state.video.video} type="video/mp4" />
      </video>
    )
  }
}

export default VideoShow;
