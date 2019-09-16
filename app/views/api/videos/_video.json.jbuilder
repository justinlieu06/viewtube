json.extract! video, :id, :title, :description, :author_id
json.username video.user.username
json.video url_for(video.video)
json.thumbnail url_for(video.thumbnail)
