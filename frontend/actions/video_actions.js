import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const FIND_VIDEOS = 'FIND_VIDEOS';

const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

const removeVideo = video => ({
  type: DELETE_VIDEO,
  videoId: video.id
});

const findVideos = videos => ({
  type: FIND_VIDEOS,
  videos
})

const receiveErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchVideos = () => dispatch => (
  VideoAPIUtil.fetchVideos().then(videos => (dispatch(receiveAllVideos(videos))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchVideo = id => dispatch => (
  VideoAPIUtil.fetchVideo(id).then(video => (dispatch(receiveVideo(video))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createVideo = video => dispatch => {
  return(
  VideoAPIUtil.createVideo(video)
  .then(video => {
    dispatch(receiveVideo(video))
  })
  .fail(err => {
    dispatch(receiveErrors(err.responseJSON))
  }));
};

export const updateVideo = video => dispatch => (
  VideoAPIUtil.updateVideo(video).then(video => (dispatch(receiveVideo(video))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteVideo = id => dispatch => (
  VideoAPIUtil.deleteVideo(id).then(video => (dispatch(removeVideo(video))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const searchVideos = query => dispatch => (
  VideoAPIUtil.searchVideos(query).then(videos => (dispatch(findVideos(videos))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
