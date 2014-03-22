class API::SessionsController < API::BaseController
  skip_before_filter :authenticate, only: [:create]

  # POST /api/sessions
  def create
    @user = User.find_by(email: _session_params[:email])
    access_token = current_access_token
    access_token.user = @user if _password_valid?
    if signed_in?
      render json: { token: access_token.token }
    else
      not_authorized()
    end
  end

  # DELETE /api/sessions/:id
  def destroy
    current_access_token.delete!
    head :no_content
  end

  private

    def _session_params
      params.require(:session).permit(:email, :password)
    end

    def _password_valid?
      @user && @user.authenticate(_session_params[:password])
    end

end
