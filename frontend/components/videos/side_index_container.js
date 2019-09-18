
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import SideIndex from './side_index';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideIndex);
