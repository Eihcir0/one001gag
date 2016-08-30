Rails.application.routes.draw do

  root "static_pages#root"
  
  namespace :api, format: {default: :json} do
    resources :users, only: [:create, :new]
    resource :session, only: [:create, :new, :destroy]
  end



end
