import { connect } from 'react-redux';
import { fetchVideo, updateVideo, deleteVideo, clearErrors } from '../../actions/video_actions';
import UpdateForm from './update_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    video: state.entities.videos[ownProps.match.params.videoId],
    errors: state.errors.videoErrors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  updateVideo: (video, formData) => dispatch(updateVideo(video, formData)),
  deleteVideo: id => dispatch(deleteVideo(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);