# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :todo_lists
  has_many :todo_items, through: :todo_lists, source: :items

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(nn,pw)
    user = User.find_by(username: nn)
    return nil unless user && user.valid_password?(pw)
    user
  end

  def valid_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end


end
