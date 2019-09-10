class Api::LikesController < ApplicationController
  def create
    @like = Like.new()
    @like.author_id = current_user.id
    @like.video_id = params[:video_id]
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 406
    end
  end

  def index
    @likes = Video.find(params[:video_id]).likes
  end

  def destroy
    @like = Like.find_by(author_id: current_user.id, 
      video_id: params[:video_id])
    @like.destroy
    render :show
  end
end
