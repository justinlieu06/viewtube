# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  User.destroy_all
  Video.destroy_all

  user1 = User.create(username: "DemoUser", email: "demo@gmail.com", password: "123456")
  vid1 = Video.create(
    title: "Ali, The Greatest of All Time", 
    description: "Watch as Ali dodges 21 punches in 10 seconds",
    author_id: user1.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/aliThumbnail.jpg')
  vid1.thumbnail.attach(io: file, filename: 'aliThumbnail.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/ali.mp4')
  vid1.video.attach(io: file, filename: 'ali.mp4')

  
end