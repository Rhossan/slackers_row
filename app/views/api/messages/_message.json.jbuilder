json.created_at(message.created_at.strftime("%I:%M %P %b %d %Y"))
json.extract! message, :id, :channel_id, :body, :username
