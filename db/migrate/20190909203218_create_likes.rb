class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end
    add_index :likes, [:video_id, :author_id], unique: true
  end
end
