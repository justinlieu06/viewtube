import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
      super(props);

      this.state = { 
        body: ''
      };
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.goToLogin = this.goToLogin.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.props.videoId, this.state.body);
      // .then(() => this.props.fetchVideo(this.props.videoId));
    this.setState({body: ''});
    // debugger
  }

  goToLogin(){
    this.props.history.push('/login')
  }

  render(){
    let commentFormCode = this.props.currentUser ? 
    (commentFormCode = <input 
        type="text" 
        value={this.state.body} 
        placeholder="Add Comment" 
        onChange={this.handleUpdate}
      />
    ) : (
      // commentFormCode = <button onClick={this.goToLogin}>Add Comment</button>
      <div>Please log in</div>
    )

    // debugger
    return(
      <div>
        <form>
          {commentFormCode}
        </form>
        <button onClick={this.handleSubmit}>Comment</button>

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
