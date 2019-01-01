@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :owner_id, :channel_type
    json.message_ids channel.messages.pluck(:id)
    json.members channel.members.pluck(:user_id)

    json.usernames channel.members do |member|
      user = User.find(member.user_id)
      json.set! user.id, user.username
    end
    # json.users @users.pluck(:username)
  end
end


# json.users @users do |user|
#   json.set! user.id, user.username
# end
json.users @users.pluck(:username)

# json.users do
#   # json.array!(@users) do |user|
#   #   json.username user.username
#   # end
#   User.pluck :name
# end
