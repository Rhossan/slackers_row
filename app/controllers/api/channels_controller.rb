class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    sleep 0.5
    @channel = Channel.find(params[:id])
  end

  def index
    @channels = Channel.all
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy

    render :show
  end

  def channel_params
    params.require(:channel).permit(:name,:channel_type,:owner_id)
  end
end
