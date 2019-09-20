export const createComment = (video_id, body) => (
  $.ajax({
    url: `/api/videos/${video_id}/comments`,
    type: `POST`,
    data: {body}
  })
);

export const deleteComment = id => (
  $.ajax({
    url: `/api/comments/${id}`,
    type: `DELETE`
  })
);