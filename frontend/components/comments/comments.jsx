import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
      super(props);

      this.state = { 
        body: '',
        comments: this.props.comments
      };
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.goToLogin = this.goToLogin.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.postComment({
      video_id: this.props.videoId, 
      body: this.state.body
    });
      // .then(() => this.props.fetchVideo(this.props.videoId));
    this.setState({body: ''});
    // debugger
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({body: ''});
  }

  goToLogin(){
    this.props.history.push('/login')
  }

  render(){
    let commentFormCode = this.props.currentUser ? 
    (<div className="comment-form">
        <i className="fas fa-user-circle fa-3x"></i>
        <input 
          type="text" 
          value={this.state.body} 
          placeholder="Add a public comment..." 
          onChange={this.handleUpdate}
          className="comment-input"
        />
      </div>
    ) : (
      // commentFormCode = <button onClick={this.goToLogin}>Add Comment</button>
      <div className="comment-form">
        <i className="fas fa-user-circle fa-3x"></i>
        <div className="comment-input">Login to post a public comment...</div>
      </div>
    )

    // debugger
    return(
      <div className="comment-wrapper">
        <div>
          <form>
            {commentFormCode}
          </form>
          <div className="com-buttons">
            <button onClick={this.handleCancel} className="cancel-button">CANCEL</button>        
            <button onClick={this.handleSubmit} className="comment-button">COMMENT</button>
          </div>
        </div>

        <div>
          {this.props.comments.map((comment, index) => (
            <CommentItem comment={comment} key={index} currentUser={this.props.currentUser} 
              deleteComment={this.props.deleteComment} />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments;
