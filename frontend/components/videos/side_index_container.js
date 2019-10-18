
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import SideIndex from './side_index';

const mapStateToProps = (state, ownProps) => ({
  videos: Object.values(state.entities.videos),
  video: ownProps.video,
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideIndex);
