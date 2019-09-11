import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignUpFormContainer from './nav_bar_top/session_form/signup_form_container';
import LogInFormContainer from './nav_bar_top/session_form/login_form_container';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = ({ children }) => (
  <div>
    <h1>ViewTube Baby!</h1>
    <Switch>
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <Route exact path='/' component={Splash} />
      <Redirect to='/' component={Splash} />
    </Switch>
  </div>
);

export default App;