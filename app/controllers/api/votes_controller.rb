class Api::VotesController < ApplicationController

  def create
    @vote = Comment.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      render json: @vote.post
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def vote_params
    params.require(:vote).permit(:vote_value, :post_id)
  end

end#class
