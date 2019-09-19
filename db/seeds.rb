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
  user3 = User.create(username: "DankMemes", email: "dankmemes@gmail.com", password: "123456")
  user4 = User.create(username: "AA4Lfye", email: "aa@gmail.com", password: "123456")
  user5 = User.create(username: "UwU", email: "uwu@gmail.com", password: "123456")
  user6 = User.create(username: "LoL", email: "lol@gmail.com", password: "123456")
  user7 = User.create(username: "Reznick", email: "reznick@gmail.com", password: "123456")
  user8 = User.create(username: "OFWGKTA", email: "ofwgkta@gmail.com", password: "123456")



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

  vid5 = Video.create(
    title: "Arian Granda Throws a Chair", 
    description: "amazing distance on that yeet",
    author_id: user3.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/ariana.jpg')
  vid5.thumbnail.attach(io: file, filename: 'ariana.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/ariana.mp4')
  vid5.video.attach(io: file, filename: 'ariana.mp4')

  vid6 = Video.create(
    title: "Genertic Cat Video", 
    description: "where did he get the wig",
    author_id: user4.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/cat.jpg')
  vid6.thumbnail.attach(io: file, filename: 'cat.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/cat.mp4')
  vid6.video.attach(io: file, filename: 'cat.mp4')

  vid7 = Video.create(
    title: "Hannah Montana?", 
    description: "It's just how I remembered it was",
    author_id: user4.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/hannah.jpg')
  vid7.thumbnail.attach(io: file, filename: 'hannah.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/hannah.mp4')
  vid7.video.attach(io: file, filename: 'hannah.mp4')

  vid8 = Video.create(
    title: "Krispy Kreme Time", 
    description: "I wonder what the aftermath was",
    author_id: user4.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/krispy.jpg')
  vid8.thumbnail.attach(io: file, filename: 'krispy.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/krispy.mp4')
  vid8.video.attach(io: file, filename: 'krispy.mp4')

  vid9 = Video.create(
    title: "What is love?", 
    description: "Baby don't hurt me",
    author_id: user5.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/love.jpg')
  vid9.thumbnail.attach(io: file, filename: 'love.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/love.mp4')
  vid9.video.attach(io: file, filename: 'love.mp4')

  vid10 = Video.create(
    title: "Red Consiparcy Theory", 
    description: "if you're so smart, EXPLAIN THIS",
    author_id: user5.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/red.jpg')
  vid10.thumbnail.attach(io: file, filename: 'red.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/red.mp4')
  vid10.video.attach(io: file, filename: 'red.mp4')

  vid11 = Video.create(
    title: "My boi michael j", 
    description: "he wants you to stop",
    author_id: user5.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/stop.jpg')
  vid11.thumbnail.attach(io: file, filename: 'stop.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/stop.mp4')
  vid11.video.attach(io: file, filename: 'stop.mp4')

  vid12 = Video.create(
    title: "Dude drops his taco", 
    description: "rip to my homie taco",
    author_id: user6.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/taco.jpg')
  vid12.thumbnail.attach(io: file, filename: 'taco.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/taco.mp4')
  vid12.video.attach(io: file, filename: 'taco.mp4')

  vid13 = Video.create(
    title: "Perfectly timed scream", 
    description: "i wanna try some",
    author_id: user7.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/taste.jpg')
  vid13.thumbnail.attach(io: file, filename: 'taste.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/taste.mp4')
  vid13.video.attach(io: file, filename: 'taste.mp4')

  vid14 = Video.create(
    title: "Adorable dog", 
    description: "what a cutie",
    author_id: user7.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/willie.jpg')
  vid14.thumbnail.attach(io: file, filename: 'willie.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/willie.mp4')
  vid14.video.attach(io: file, filename: 'willie.mp4')

  vid15 = Video.create(
    title: "I'm Not Finished", 
    description: "he's not finished",
    author_id: user8.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/tyler.jpg')
  vid15.thumbnail.attach(io: file, filename: 'tyler.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/tyler.mp4')
  vid15.video.attach(io: file, filename: 'tyler.mp4')

  vid16 = Video.create(
    title: "People Are Afraid of Technology", 
    description: "Truly terrifying",
    author_id: user8.id
  )
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/technology.jpg')
  vid16.thumbnail.attach(io: file, filename: 'technology.jpg')
  file = open('https://viewtube-seeds.s3-us-west-1.amazonaws.com/technology.mp4')
  vid16.video.attach(io: file, filename: 'technology.mp4')
end