import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveAllVideos = () => ({
  type: RECEIVE_ALL_VIDEOS,
});

const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

const deleteVideo = id => ({
  type: DELETE_VIDEO,
  videoId: video.id
});

const receiveErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors: errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

// export const fetchVideos = () => dispatch => (

// );


