class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :vote_value
      t.integer :user_id
      t.integer :post_id
      t.timestamps null: false
    end
  end
end
