class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render `api/posts/${@comment.post.id}`
    else
      render json: @user.errors.full_messages, status: 422
    end
  end



  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end

end#class
