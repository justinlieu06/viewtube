import { connect } from 'react-redux';
import { createLike, destroyLike } from '../../actions/like_actions';
import { createDislike, destroyDislike } from '../../actions/dislike_actions';
import LikeDislike from './like_dislike';

const mapStateToProps = (state, ownProps) => {
  return {
    videoId: ownProps.videoId,
    likes: ownProps.likes,
    dislikes: ownProps.dislikes,
    userLikes: ownProps.userLikes,
    userDislikes: ownProps.userDislikes,
    currentUser: ownProps.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createLike: video_id => dispatch(createLike(video_id)),
  destroyLike: video_id => dispatch(destroyLike(video_id)),
  createDislike: video_id => dispatch(createDislike(video_id)),
  destroyDislike: video_id => dispatch(destroyDislike(video_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislike);