# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

  validates :title, :description, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :likes,
    foreign_key: :video_id,
    class_name: 'Like'

  has_many :dislikes,
    foreign_key: :video_id,
    class_name: 'Dislike'

  has_many :likes_authors,
    through: :likes,
    source: :user

  has_many :dislikes_authors,
    through: :dislikes,
    source: :user
  
  has_many :comments,
    foreign_key: :video_id,
    class_name: 'Comment'

end
