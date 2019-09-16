import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);