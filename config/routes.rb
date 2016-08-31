Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:create, :new, :index, :show]
    resources :users, only: [:create, :new]
    resource :session, only: [:create, :new, :destroy]
  end



end
