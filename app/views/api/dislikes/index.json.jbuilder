@dislikes.each do |dislike|
  json.set! dislike.id do
    json.extract! dislike, :id, :author_id, :video_id
  end
end