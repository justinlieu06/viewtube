export const fetchDislikes = video_id => (
  $.ajax({
    url: `/api/videos/${video_id}/dislikes`,
    type: `GET`
  })
)

export const createDislike = video_id => (
  $.ajax({
    url: `/api/videos/${video_id}/dislikes`,
    type: `POST`
  })
)

export const destroyDislike = video_id => (
  $.ajax({
    url: `/api/videos/${video_id}/dislikes`,
    type: `DELETE`
  })
)