import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: DELETE_COMMENT,
  commentId: comment.id
});

export const postComment = (obj) => dispatch => (
  CommentAPIUtil.postComment(obj.video_id, obj.body).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (id) => dispatch => (
  CommentAPIUtil.deleteComment(id).then(comment => dispatch(removeComment(comment)))
);
