export const postComment = (video_id, body) => {
  return $.ajax({
    url: `/api/videos/${video_id}/comments`,
    type: `POST`,
    data: {body}
  })
};

export const deleteComment = id => {
  return $.ajax({
    url: `/api/comments/${id}`,
    type: `DELETE`
  })
};