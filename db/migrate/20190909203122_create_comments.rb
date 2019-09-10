class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :video_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :comments, :author_id, unique: true
    add_index :comments, :video_id, unique: true
  end
end
