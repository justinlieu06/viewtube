import React from 'react';
import { Link } from 'react-router-dom';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import Modal from '../nav_bar_side/modal';
import SideIndexContainer from './side_index_container';
import CommentsContainer from '../comments/comments_container';
import { Redirect } from 'react-router-dom'
import LikeDislikeContainer from './like_dislike_container'

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      redirect: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }

  renderRedirect() {
    // debugger
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  componentDidMount(){
    this.props.fetchVideo(this.props.match.params.videoId).then( res => {
      this.setState({
        video: res.video.video
      })
    })
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps){
    window.scrollTo(0, 0);
    
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteVideo(this.state.video.id).then(()=>this.setRedirect)
  }

  render(){
    if (this.props.video === undefined){
      return null;
    }
    let deleteButton = <div></div>
    if (this.props.currentUser && this.state.video !== undefined){
      if (this.props.currentUser.id === this.state.video.author_id){
        deleteButton = <button onClick={this.handleDelete} className="delete-button">DELETE VIDEO</button>
      }
    }
    return(
      <div className="vid-show-wrapper">
        {this.renderRedirect()}

        <NavBarTopContainer />
        <Modal />
        <div className="vid-show">
          
          <div className="show-left">
            <div className="outer-vid-wrapper">
              <div className="vid-wrapper">
                <video key={this.props.video.id} width='100%' className='video-show-player' controls autoPlay>
                  <source src={this.props.video.video} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="vid-info">
              <div className="vid-title">
                {this.props.video.title}
              </div>
              <div className="vid-published">
                Published on {this.props.video.published}
              </div>
              <LikeDislikeContainer 
                videoId={this.props.video.id}
                likes={this.props.video.likes}
                dislikes={this.props.video.dislikes}
                userLikes={this.props.video.userLikes}
                userDislikes={this.props.video.userDislikes}
                currentUser={this.props.currentUser}
              />
              <hr />
              <div className="vid-username">
                <i className="fas fa-user-circle fa-3x"></i>
                <span className="video-author">{this.props.video.author}</span>
                <i className="fas fa-check-circle" id="username-check"></i>
                <div className="delete-wrapper">{deleteButton}</div>
              </div>

              <div className="vid-description">
                {this.props.video.description}
              </div>
              <hr />
            </div>

            <CommentsContainer videoId={this.props.video.id} video={this.props.video}/>
          </div>

          {/* <div className="vid-show-wrapper"></div> */}

          <div className="show-right"><SideIndexContainer video={this.props.video} /></div>
        </div>
      </div>
    )
  }
}

export default VideoShow;
