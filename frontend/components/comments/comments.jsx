import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
      console.log("CONSTRUCTOR");
      super(props);

      this.state = { 
        body: '',
        comments: this.props.comments,
        stateComments: this.props.comments,
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
    console.log("SUBMIT");
    e.preventDefault();
    this.props.postComment({
      video_id: this.props.videoId, 
      body: this.state.body
    });
    // console.log(this.props.stateComments);
    // this.setState({body: '', stateComments: this.props.stateComments});
    // console.log(this.state);
    this.setState({body: ''});

  }

  handleCancel(e){
    e.preventDefault();
    this.setState({body: ''});
  }

  goToLogin(){
    this.props.history.push('/login')
  }

  componentDidUpdate(prevProps, prevState){
    let equal = true;
    let prevComments = prevProps.stateComments;
    let currComments = this.props.stateComments;
    //check if arrays are equal
    if (prevComments.length !== currComments.length){
      equal = false;
    }
    for (let i = 0; i < prevComments.length; i++){
      if (prevComments[i] !== currComments[i]){
        equal = false;
      }
    }
    //only update if the state comments are not equal
    if (!equal){
      console.log("UPDATE");
      console.log(this.state.comments);
      this.state.comments.push(currComments[currComments.length-1]);
      console.log(this.state.comments);

      this.forceUpdate();
    }
  }


  render(){
    console.log("RENDER");
    console.log(this.state.comments);
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
      <div className="comment-form">
        <i className="fas fa-user-circle fa-3x"></i>
        <div className="comment-input">Login to post a public comment...</div>
      </div>
    )

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
          {this.state.comments.map((comment, index) => (
            <CommentItem comment={comment} key={index} currentUser={this.props.currentUser} 
              deleteComment={this.props.deleteComment} />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments;
