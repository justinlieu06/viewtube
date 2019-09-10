class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :description, null: false

      t.timestamps
    end
    add_index :videos, :author_id, unique: true
    add_index :videos, :title, unique: true
  end
end
