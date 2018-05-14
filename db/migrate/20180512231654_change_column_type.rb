class ChangeColumnType < ActiveRecord::Migration[5.1]
  def change
    remove_column :channels, :type
    add_column :channels, :channel_type, :string
  end
end
