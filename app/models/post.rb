# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  image_url  :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :user_id, :title, :image_url, presence: true

  belongs_to :user
  has_many :comments
  has_many :votes



  def all_comments
    results = [] + self.comments
    results.map{|comment| ({id: comment.id, post_id: comment.post_id, user_id: comment.user_id, body: comment.body, username: comment.user.username, created_at: comment.created_at.to_s.slice(0,10)}) }
  end

  def total_points
    self.votes.map{|vote| vote.vote_value}.inject(&:+)
  end

  def num_comments
    self.comments ? self.comments.count : 0
  end



end#class
