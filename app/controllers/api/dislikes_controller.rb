class Api::DislikesController < ApplicationController
  def create
    @dislike = Dislike.new()
    @dislike.author_id = current_user.id
    @dislike.video_id = params[:video_id]
    if @dislike.save
      render :show
    else
      render json: @dislike.errors.full_messages, status: 406
    end
  end

  def index
    @dislikes = Video.find(params[:video_id]).dislikes
  end

  def destroy
    @dislike = Dislike.find_by(author_id: current_user.id, 
      video_id: params[:video_id])
    @dislike.destroy
    render :show
  end
end
