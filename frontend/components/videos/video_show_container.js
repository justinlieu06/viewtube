import { connect } from 'react-redux';
import { fetchVideo, deleteVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
  return {
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.videoErrors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchVideo: id=>dispatch(fetchVideo(id)),
  deleteVideo: id=>dispatch(deleteVideo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);