json.channel do
  json.extract! @channel, :id, :name, :channel_type, :owner_id
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
