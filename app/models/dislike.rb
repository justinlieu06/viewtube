# == Schema Information
#
# Table name: dislikes
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Dislike < ApplicationRecord

  validates :author_id, :video_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :video,
    foreign_key: :video_id,
    class_name: 'Video'

end
