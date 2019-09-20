import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import search from './search';

const mapStateToProps = (state, ownProps) => ({
  query: ownProps.match.params.query,
  videos: Object.values(state.entities.videos)
})

const mapDispatchToProps = dispatch => ({
  searchVideos: query => dispatch(searchVideos(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(search);