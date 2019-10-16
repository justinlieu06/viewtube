export const fetchLikes = video_id => (
  $.ajax({
    url: `/api/videos/${video_id}/likes`,
    type: `GET`
  })
)

export const createLike = video_id => {
  return $.ajax({
    url: `/api/videos/${video_id}/likes`,
    type: `POST`
  });
}

export const destroyLike = video_id => (
  $.ajax({
    url: `/api/videos/${video_id}/likes`,
    type: `DELETE`
  })
)