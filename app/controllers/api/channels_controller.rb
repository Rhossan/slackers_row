class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      #if channel type is channel, or no userlist, we get an internal server error caused by undefined method `gsub'
      if @channel.channel_type == "direct_message"
        params[:channel][:userList].gsub(/\s+/, "").split(',').each do |user|
          user = User.find_by(username: user)
          Membership.create!({ channel_id: @channel.id, user_id: user.id})
        end
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
    @users = User.all
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
