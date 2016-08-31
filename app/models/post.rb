# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :string           not null
#  image_url  :string           not null
#  title      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :user_id, :title, :image_url, presence: true

end#class
