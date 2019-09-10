import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpFormContainer from './nav_bar_top/session_form/signup_form_container';
import LogInFormContainer from './nav_bar_top/session_form/login_form_container';
import Splash from './splash';

const App = ({ children }) => (
  <div>
    <h1>ViewTube Baby!</h1>
    <Switch>
      <Route exact path='/signup' component={SignUpFormContainer} />
      <Route exact path='/login' component={LogInFormContainer} />
      <Route exact path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;