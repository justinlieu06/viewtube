import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  DELETE_VIDEO,
  FIND_VIDEOS,
} from '../actions/video_actions';

const videoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos.videos;
    case RECEIVE_VIDEO:
      newState[action.video.video.id] = action.video.video;
      return newState;
    case DELETE_VIDEO:
      delete newState[action.videoId];
      return newState;
    case FIND_VIDEOS:
      // debugger
      let result = action.videos.videos ? action.videos.videos : {};
      return result;
    default:
      return oldState;
  }
}

export default videoReducer;