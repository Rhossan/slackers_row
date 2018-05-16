class Api::MessagesController < ApplicationController
  def create

    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show

    @message = Message.find(params[:id])
  end

  private
  def message_params
    params.require(:message).permit(:channel_id, :body)
  end
end
