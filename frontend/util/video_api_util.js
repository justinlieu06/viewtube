export const fetchVideos = () => (
  $.ajax({
    url: `/api/videos`,
    type: `GET`,
  })
);

export const fetchVideo = id => (
  $.ajax({
    url: `/api/videos/${id}`,
    type: `GET`,
  })
);

export const createVideo = video => (
  $.ajax({
    url: `/api/videos`,
    type: `POST`,
    data: video,
    contentType: false,
    processData: false
  })
);

export const updateVideo = video => (
  $.ajax({
    url: `/api/videos/${video.id}`,
    type: `PATCH`,
    data: {video}
  })
);

export const deleteVideo = id => (
  $.ajax({
    url: `/api/videos/${id}`,
    type: `DELETE`,
  })
);

// export const searchVideos = input => ({
//   url: `/api/search`,
//   type: 'GET',
//   data: { input }
// })