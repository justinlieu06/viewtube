import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const deleteLike = like => ({
  type: DELETE_LIKE,
  like
});

export const fetchLikes = video_id => dispatch => (
  LikeAPIUtil.fetchLikes(video_id).then(likes => dispatch(receiveAllLikes(likes)))
)

export const createLike = video_id => dispatch => (
  LikeAPIUtil.createLike(video_id).then(like => dispatch(receiveLike(like)))
)

export const destroyLike = video_id => dispatch => (
  LikeAPIUtil.destroyLike(video_id).then(like => dispatch(deleteLike(like)))
)