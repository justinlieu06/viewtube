import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignUpFormContainer from './nav_bar_top/session_form/signup_form_container';
import LogInFormContainer from './nav_bar_top/session_form/login_form_container';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
// import Modal from './nav_bar_side/modal';
import UploadFormContainer from './videos/upload_form_container'
import VideoShowContainer from './videos/video_show_container';
import SearchContainer from './videos/search_container';
import UpdateFormContainer from './videos/update_container';

// const App = ({ children }) => (
//   <div>
//     <Switch>
//       <AuthRoute exact path='/signup' component={SignUpFormContainer} />
//       <AuthRoute exact path='/login' component={LogInFormContainer} />
//       <ProtectedRoute path="/upload" component={UploadFormContainer} />
//       <ProtectedRoute path="/video/:videoId/edit" component={UpdateFormContainer} />
//       <Route path="/watch/:videoId" component={VideoShowContainer} />
//       <Route exact path='/search/:query' component={SearchContainer} />
//       <Route exact path='/' component={Splash} />
//       <Redirect to='/' component={Splash} />
//     </Switch>
//   </div>
// );

class App extends Component {

  keepAwake = () => {
    var https = require("https");
    setInterval(function() {
        https.get("https://viewtube-fsp.herokuapp.com");
        // console.log("keep awake");
    }, 300000); // every 5 minutes (300000)
  }

  render() {
    return (
      <div>
          <Switch>
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <ProtectedRoute path="/upload" component={UploadFormContainer} />
            <ProtectedRoute path="/video/:videoId/edit" component={UpdateFormContainer} />
            <Route path="/watch/:videoId" component={VideoShowContainer} />
            <Route exact path='/search/:query' component={SearchContainer} />
            <Route exact path='/' component={Splash} />
            <Redirect to='/' component={Splash} />
          </Switch>
          <button onClick={this.keepAwake()}></button>
        </div>
    );
  }

}

export default App;