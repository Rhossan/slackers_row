Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  mount ActionCable.server => '/cable'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :channels, only: [:create, :show, :index, :destroy]
    resources :messages, only: [:create, :show]
    resource :session, only: [:create,:destroy]
  end
end
