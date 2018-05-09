class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :email, null:false
      t.string :password_digest, null:false
      t.string :session_token, null:false
      t.timestamps
    end
    # t.index ["session_token"], name: "index_users_on_session_token", unique: true
    # t.index ["username"], name: "index_users_on_username", unique: true
    add_index :users, :username, unique:true
    add_index :users, :session_token, unique:true
  end
end
