json.channel do
  json.extract! @channel, :id, :name, :channel_type, :owner_id
  json.message_ids @channel.messages.pluck(:id)
end

json.messages do
  @channel.messages.map do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
