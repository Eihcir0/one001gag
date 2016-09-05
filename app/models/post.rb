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

  def all_comments
    results = [] + self.comments
    results.map{|comment| ({id: comment.id, post_id: comment.post_id, user_id: comment.user_id, body: comment.body, username: comment.user.username}) }

    end



  def num_comments
    self.comments.count
  end



end#class
