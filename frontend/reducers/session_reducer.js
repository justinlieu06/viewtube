// import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

let defaultState = {id: null};

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return oldState;
  }
};

export default SessionReducer;