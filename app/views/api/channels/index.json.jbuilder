@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :owner_id, :channel_type
    json.message_ids channel.messages.pluck(:id)
    # special_array = []
    # channel.messages.pluck(:id).map { |el| el * 2 }
    # json.potato special_array
  end
end
