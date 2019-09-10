export const getVideos = () => (
  $.ajax({
    url: `/api/videos`,
    type: 'GET'
  })
);

export const getVideo = id => (
  $.ajax({
    url: `/api/videos/${id}`,
    type: 'GET'
  })
);

export const createVideo = video => (
  $.ajax({
    url: `/api/videos`,
    type: 'POST',
    data: { video }
  })
);

export const updateVideo = video => (
  $.ajax({
    url: `/api/videos/${video.id}`,
    type: 'PATCH',
    data: { video }
  })
);

export const deleteVideo = id => (
  $.ajax({
    url: `/api/videos/${id}`,
    type: 'DELETE'
  })
);