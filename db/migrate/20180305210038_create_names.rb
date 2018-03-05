class CreateNames < ActiveRecord::Migration[5.1]
  def change
    create_table :names do |t|
      t.float :price
      t.text :description

      t.timestamps
    end
  end
end
