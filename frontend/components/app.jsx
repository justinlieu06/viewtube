import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignUpFormContainer from './nav_bar_top/session_form/signup_form_container';
import LogInFormContainer from './nav_bar_top/session_form/login_form_container';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
// import Modal from './nav_bar_side/modal';
import UploadFormContainer from './videos/upload_form_container'
import VideoShowContainer from './videos/video_show_container';
import SearchContainer from './videos/search_container';

const App = ({ children }) => (
  <div>
    {/* <Modal /> */}
    <Switch>
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <ProtectedRoute path="/upload" component={UploadFormContainer} />
      <Route path="/watch/:videoId" component={VideoShowContainer} />
      <Route exact path='/search/:query' component={SearchContainer} />
      <Route exact path='/' component={Splash} />
      <Redirect to='/' component={Splash} />
    </Switch>
  </div>
);

export default App;