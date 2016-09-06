class Vote < ActiveRecord::Base
  validates :user_id, :post_id, :vote_value, presence: true

  belongs_to :user
  belongs_to :post

end
