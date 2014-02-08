class API::LeaguesController < ApplicationController
  before_action :set_user, only: [:show, :create, :update]
  before_action :set_league, only: [:show, :update]

  def index
    @leagues = League.find_by(user_id: params[:user_id])
    render json: @leagues
  end

  def show
    render json: @league
  end

  def create
    @league = @user.leagues.new(league_params)
    if @league.save
      render json: @league, status: :created, location: api_user_league_path(@user, @league)
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  def update
    if @league.update_attributes(league_params)
      head :no_content
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_league
      @league = @user.leagues.find(params[:id])
    end

    def league_params
      params.require(:league).permit(:name)
    end
end
