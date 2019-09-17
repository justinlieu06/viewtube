@videos.each do |video|
  json.videos do
    json.set! video.id do
      json.extract! video, :id, :title, :description, :author_id
      json.author video.user.username
      json.video url_for(video.video)
      json.thumbnail url_for(video.thumbnail)
    end
  end
end