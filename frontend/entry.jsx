import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';

import {signUp, logIn, logOut} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    };
  }
  const store = configureStore(preloadedState);
  delete window.currentUser;

  window.getState = store.getState;
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;
  ReactDOM.render(<Root store={store} />, root);
});