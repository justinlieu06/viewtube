import React from 'react';
class CommentItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  render(){
    return(
      <div className="comment-item-wrapper">
        <div className="comment-item">
          <i className="far fa-user-circle fa-3x"></i>
          <div className="comment-item-right">
            <div className="comment-username">
              {this.props.comment.username} 
              <span className="comment-published">{this.props.comment.published}</span>
            </div>
            <div className="comment-body">{this.props.comment.body}</div>
          </div>
        </div>
        <button onClick={this.handleDelete} className="comment-item-delete">Delete</button>
      </div>
    )
  }
}

export default CommentItem;