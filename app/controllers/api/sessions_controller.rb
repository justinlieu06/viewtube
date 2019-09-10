class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    logout
    render :show
  end
end
