class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_aciton :authenticate_user!
  before_aciton :configure_permitted_parameters, if :devise_controller?
end

protected

def configure_permitted_parameters
	devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
end
