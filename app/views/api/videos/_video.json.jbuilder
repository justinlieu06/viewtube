json.extract! video, :id, :title, :description, :author_id
json.username video.user.username
json.published video.created_at.strftime("%B %d, %Y")
json.video url_for(video.video)
json.thumbnail url_for(video.thumbnail)
