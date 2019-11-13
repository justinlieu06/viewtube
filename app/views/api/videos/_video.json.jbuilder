json.extract! video, :id, :title, :description, :author_id
json.username video.user.username
json.published video.created_at.strftime("%B %d, %Y")
json.video url_for(video.video)
json.thumbnail url_for(video.thumbnail)
json.likes video.likes.length
json.dislikes video.dislikes.length
json.comments video.comments.to_h if video.comments.empty?

video.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.extract! comment, :id, :body, :video_id, :author_id
      json.username comment.user.username
    end
  end
end