# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Message.delete_all
Channel.delete_all
User.delete_all

user1 = User.create! (
  {username: "Charlie",
  password: "starwars"}
)

user2 = User.create! (
  {username: "Drake",
  password: "starwars"}
)

user3 = User.create! (
  {username: "Josh",
  password: "starwars"}
)

channel1 = Channel.create! (
  {name: "channel orange",
  owner_id: user1.id,
  channel_type: "channel"}
)

channel2 = Channel.create! (
  {name: "slackers unite!...tomorrow",
  owner_id: user2.id,
  channel_type: "channel"}
)

Message.create! (
  {channel_id: channel1.id,
  body: "hello cruel world"}
)

Message.create! (
  {channel_id: channel2.id,
  body: "Does this app even work?"}
)
