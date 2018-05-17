# json.partial! 'api/messages', message: @message

json.extract! @message, :id, :channel_id, :body, :created_at.strftime("%H:%M %b %d %Y")
