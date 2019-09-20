import { combineReducers } from 'redux';

import usersReducer from "./users_reducer";
import videoReducer from "./videos_reducer";
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videoReducer,
  comments: commentsReducer,
});

export default entitiesReducer;