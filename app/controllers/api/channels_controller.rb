class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      params[:channel][:userIds].each do |user|
        Membership.create!({ channel_id: @channel.id, user_id: user})
      end
      Message.create! (
        {channel_id: @channel.id,
         body: "Let's talk about #{@channel.name}!",
         username: current_user.username}
      )
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    sleep 0.5
    @channel = Channel.find(params[:id])
    # if user has never clicked on channel, add user as a member of channel
    ids = []
    @channel.members.each do |member|
      ids << member.user_id
    end
    if !ids.include?(current_user.id)
      Membership.create!({ channel_id: @channel.id, user_id: current_user.id})
    end
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
    params.require(:channel).permit(:name,:channel_type,:owner_id,:userIds)
  end
end
