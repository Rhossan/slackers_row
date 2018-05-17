class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      ChatChannel.broadcast_to(@message.channel, JSON.parse(render('/api/messages/_message.json.jbuilder', locals: {message: @message})))
      head :ok
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show

    @message = Message.find(params[:id])
  end

  private
  def message_params
    params.require(:message).permit(:channel_id, :body, :username)
  end
end
