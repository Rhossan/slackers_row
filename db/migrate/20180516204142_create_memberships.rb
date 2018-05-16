class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.integer "channel_id", null:false
      t.integer "user_id", null:false

      t.timestamps
    end
    add_index :memberships, :channel_id
    add_index :memberships, :user_id
    add_index :memberships, [:user_id, :channel_id], unique: true
  end
end
