class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      @post = @vote.post
      render "/api/posts/show"
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end


  def update
    @vote = Vote.find_by_id(params[:id])
    if @vote.update(vote_params)
      @post = @vote.post
      render "/api/posts/show"
    else
      render(json: @vote.errors.full_messages, status: 422)
    end
  end


  def destroy
    @vote = Vote.find(params[:vote][:id])
    @vote.destroy
    @post = @vote.post
    render "/api/posts/show"
  end


  def vote_params
    params.require(:vote).permit(:vote_value, :post_id)
  end

end#class
