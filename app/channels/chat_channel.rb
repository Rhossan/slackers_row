class ChatChannel < ApplicationCable::Channel
  def subscribed
    chatChannel = Channel.find(params[:id])
    stream_for chatChannel
  end

end
