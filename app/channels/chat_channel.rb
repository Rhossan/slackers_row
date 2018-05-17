class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    chatChannel = Channel.find(params[:id])
    stream_for chatChannel
  end

end
