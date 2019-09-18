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
  user2 = User.create(username: "Lieutuber", email: "lieutuber@gmail.com", password: "123456")
  user3 = User.create(username: "NoobMaster", email: "noobmaster@gmail.com", password: "123456")
  user4 = User.create(username: "AA4Lfye", email: "aa@gmail.com", password: "123456")

  vid1 = Video.create(
    title: "Ali, The Greatest of All Time", 
    description: "Watch as Ali dodges 21 punches in 10 seconds",
    author_id: user1.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/aliThumbnail.jpg')
  vid1.thumbnail.attach(io: file, filename: 'aliThumbnail.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/ali.mp4')
  vid1.video.attach(io: file, filename: 'ali.mp4')

  vid2 = Video.create(
    title: "You have been stopped", 
    description: "I like vines",
    author_id: user4.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/beenStoppedThumbnail.jpg')
  vid2.thumbnail.attach(io: file, filename: 'beenStoppedThumbnail.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/beenStopped.mp4')
  vid2.video.attach(io: file, filename: 'beenStopped.mp4')
  
  vid3 = Video.create(
    title: "Another kermit vine", 
    description: "The og muppet",
    author_id: user2.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/kermitThumbnail.jpg')
  vid3.thumbnail.attach(io: file, filename: 'kermitThumbnail.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/kermit.mp4')
  vid3.video.attach(io: file, filename: 'kermit.mp4')

  vid4 = Video.create(
    title: "Well then", 
    description: "d o double g",
    author_id: user3.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/snoopThumbnail.jpg')
  vid4.thumbnail.attach(io: file, filename: 'snoopThumbnail.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/snoop.mp4')
  vid4.video.attach(io: file, filename: 'snoop.mp4')
end