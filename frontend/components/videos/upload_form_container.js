import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createVideo, clearErrors } from '../../actions/video_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.videoErrors
  };
};

const mapDispatchToProps = dispatch => ({
  createVideo: video => dispatch(createVideo(video)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);