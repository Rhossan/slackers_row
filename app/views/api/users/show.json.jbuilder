# json.partial! "api/users/_user", user: @user
json.extract! @user, :id, :username, :email
# json.users @users.pluck(:username)
