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
      <div>
        {/* <div>{this.props.comment.author}</div> */}
        <div>{this.props.comment.body}</div>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default CommentItem;