import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '../../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));