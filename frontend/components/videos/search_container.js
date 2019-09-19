import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import search from './search';

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.match.params.query,
  videos: Object.values(state.entities.videos)
})

const mapDispatchToProps = dispatch => ({
  fetchVideos: input => dispatch(fetchVideos(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(search);