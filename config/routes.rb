Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :comments, only: [:create]
    resources :votes, only: [:create]
    resources :posts, only: [:create, :new, :index, :show]
    resources :users, only: [:create, :new]
    resource :session, only: [:create, :new, :destroy]
  end



end
