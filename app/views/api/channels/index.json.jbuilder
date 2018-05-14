@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :owner_id, :channel_type
    json.message_ids []
  end
end
