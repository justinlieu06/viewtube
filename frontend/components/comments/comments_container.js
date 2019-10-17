import { connect } from 'react-redux';
import { postComment, deleteComment } from '../../actions/comment_actions';
import Comments from './comments';
// import { fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("MSP");
  return({
    comments: Object.values(ownProps.video.comments).filter(
      comment => {
        return comment.video_id === ownProps.videoId
      }
    ),
    currentUser: state.session.id ? state.entities.users[state.session.id] : null,
    stateComments: Object.values(state.entities.comments).filter(
      comment => {
        return comment.video_id === ownProps.videoId
      }
    ),
  })
}

const mapDispatchToProps = dispatch => ({
  postComment: comment=>dispatch(postComment(comment)),
  deleteComment: id=>dispatch(deleteComment(id)),
  fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);