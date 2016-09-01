class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by_id(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def post_params
    params.require(:post).permit(:title, :image_url)
  end

end#class
