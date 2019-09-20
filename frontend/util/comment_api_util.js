export const createComment = (video_id, comment) => (
  $.ajax({
    url: `/api/videos/${video_id}/comments`,
    type: `POST`,
    data: {comment}
  })
);

export const deleteComment = id => (
  $.ajax({
    url: `/api/comments/${id}`,
    type: `DELETE`
  })
);