@likes.each do |like|
  json.set! like.id do
    json.extract! like, :id, :author_id, :video_id
  end
end