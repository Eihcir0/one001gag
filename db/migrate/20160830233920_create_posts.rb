class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :user_id, null: false
      t.string :image_url, null: false
      t.integer :title, null: false
      t.timestamps null: false
    end
  end
end
