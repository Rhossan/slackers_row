class RemoveEmailrequireFromUserTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :email
    add_column :users, :email, :string
  end
end