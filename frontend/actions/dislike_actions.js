import * as DislikeAPIUtil from '../util/dislike_api_util';

export const RECEIVE_ALL_DISLIKES = "RECEIVE_ALL_DISLIKES";
export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";
export const DELETE_DISLIKE = "DELETE_DISLIKE";

const receiveAllDislikes = dislikes => ({
  type: RECEIVE_ALL_DISLIKES,
  dislikes
});

const receiveDislike = dislike => ({
  type: RECEIVE_DISLIKE,
  dislike
});

const deleteDislike = dislike => ({
  type: DELETE_DISLIKE,
  dislike
});

export const fetchDislikes = video_id => dispatch => (
  DislikeAPIUtil.fetchDislikes(video_id).then(dislikes => dispatch(receiveAllDislikes(dislikes)))
)

export const createDislike = video_id => dispatch => (
  DislikeAPIUtil.createDislike(video_id).then(dislike => dispatch(receiveDislike(dislike)))
)

export const destroyDislike = video_id => dispatch => (
  DislikeAPIUtil.destroyDislike(video_id).then(dislike => dispatch(deleteDislike(dislike)))
)