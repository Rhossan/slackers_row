json.channel do
  json.extract! @channel, :id, :name, :channel_type, :owner_id
  json.message_ids @channel.messages.pluck(:id)
  json.members @channel.members.pluck(:user_id)
  json.usernames @channel.members do |member|
    user = User.find(member.user_id)
    json.set! user.id, user.username
  end
end

json.messages do
  @channel.messages.map do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
# .order('created_at ASC')
