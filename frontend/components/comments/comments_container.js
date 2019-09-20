import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import Comments from './comments';
// import { fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  
  return({
    comments: state.entities.comments ? Object.values(state.entities.comments) : [],
    currentUser: state.session.id ? state.entities.users[state.session.id] : null,
    video: ownProps.video
  })
}

const mapDispatchToProps = dispatch => ({
  createComment: comment=>dispatch(createComment(comment)),
  deleteComment: id=>dispatch(deleteComment(id)),
  fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)