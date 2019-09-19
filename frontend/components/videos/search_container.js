import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import search from './search';

const mapStateToProps = (state, ownProps) => ({
  // queryString: ownProps.location.search
})

const mapDispatchToProps = dispatch => ({
  fetchVideos: input => dispatch(fetchVideos(input))
})

export default connect(mapStateToProps, mapDispatchToProps)()