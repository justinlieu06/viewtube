import React from 'react';
import { Link } from 'react-router-dom';

class LikeDislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoId,
      likes: this.props.likes,
      dislikes: this.props.dislikes,
      userLikes: this.props.userLikes,
      userDislikes: this.props.userDislikes,
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  };

  componentDidUpdate(prevProps){
    if (prevProps.videoId !== this.props.videoId){
      this.setState({
        videoId: this.props.videoId,
        likes: this.props.likes,
        dislikes: this.props.dislikes,
        userLikes: this.props.userLikes,
        userDislikes: this.props.userDislikes,
      })
    }
  }

  handleLike(e){
    e.preventDefault();
    let userLikes = this.state.userLikes;
    let userDislikes = this.state.userDislikes;
    if (this.props.currentUser){
      if (!userLikes && !userDislikes){
        //if video is not liked or disliked, like it
        this.props.createLike(this.state.videoId).then(ret => {
          this.setState({
            likes: ++this.state.likes,
            userLikes: !userLikes,
          });
        });
      } 
      else if (userLikes){
        //if already liked, unlike it
        this.props.destroyLike(this.state.videoId)
          .then(ret => {
            this.setState({
              likes: --this.state.likes,
              userLikes: !userLikes
            })
          })
      } 
      else if (!userLikes && userDislikes) {
        //if not liked, but disliked, destroy dislike, and like it
        this.props.destroyDislike(this.state.videoId);
        this.props.createLike(this.state.videoId).then(result => {
          this.setState({
            likes: ++this.state.likes,
            dislikes: --this.state.dislikes,
            userLikes: !userLikes,
            userDislikes: !userDislikes
          })
        })
      }
    }
  }

  handleDislike(e){
    e.preventDefault();
    let userLikes = this.state.userLikes;
    let userDislikes = this.state.userDislikes;
    if (this.props.currentUser){
      if (!userDislikes && !userLikes){
        //if video is not liked or disliked, dislike it
        this.props.createDislike(this.state.videoId).then(ret => {
          this.setState({
            dislikes: ++this.state.dislikes,
            userDislikes: !userDislikes,
          });
        });
      } 
      else if (userDislikes){
        //if already liked, unlike it
        this.props.destroyDislike(this.state.videoId)
          .then(ret => {
            this.setState({
              dislikes: --this.state.dislikes,
              userDislikes: !userDislikes
            })
          })
      } 
      else if (!userDislikes && userLikes) {
        //if not disliked, but liked, destroy like and dislike video
        this.props.destroyLike(this.state.videoId);
        this.props.createDislike(this.state.videoId).then(result => {
          this.setState({
            likes: --this.state.likes,
            dislikes: ++this.state.dislikes,
            userLikes: !userLikes,
            userDislikes: !userDislikes
          })
        })
      }
    }
  }

  render(){
    let likeButton = this.props.currentUser ? this.props.userLikes ?

      <button onClick={this.handleLike} className="selected">
        <i className="fas fa-thumbs-up"></i>
        <div className="like-dislike-num">{this.state.likes}</div>
      </button> :

      <button onClick={this.handleLike} className="unselected">
        <i className="fas fa-thumbs-up"></i>
        <div className="like-dislike-num">{this.state.likes}</div>
      </button> :

      <button onClick={this.handleLike} className="unselected">
        <i className="fas fa-thumbs-up"></i>
        <div className="like-dislike-num">{this.state.likes}</div>
      </button>

    let dislikeButton = this.props.currentUser ? this.props.userDislikes ?

      <button onClick={this.handleDislike} className="selected">
        <i className="fas fa-thumbs-down"></i>
        <div className="like-dislike-num">{this.state.dislikes}</div>
      </button> :

      <button onClick={this.handleDislike} className="unselected">
        <i className="fas fa-thumbs-down"></i>
        <div className="like-dislike-num">{this.state.dislikes}</div>
      </button> :

      <button onClick={this.handleDislike} className="unselected">
        <i className="fas fa-thumbs-down"></i>
        <div className="like-dislike-num">{this.state.dislikes}</div>
      </button>

    return(
      <div className="like-dislike-buttons">
        <div>{likeButton}</div>
        <div>{dislikeButton}</div>
      </div>
    )
  }
}

export default LikeDislike;
