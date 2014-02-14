class API::LeaguesController < ApplicationController
  before_action :set_user, only: [:index, :create]
  before_action :set_league, only: [:show, :update, :destroy]

  # GET /api/leagues
  # GET /api/leagues.json
  # GET /api/users/:user_id/leagues
  # GET /api/users/:user_id/leagues.json
  def index
    if @user
      @leagues = @user.leagues.active
    else
      @leagues = League.all
    end
    render json: @leagues
  end

  # GET /api/leagues/1
  # GET /api/leagues/1.json
  def show
    render json: @league
  end

  # POST /api/users/:user_id/leagues
  # POST /api/users/:user_id/leagues.json
  def create
    @league = @user.leagues.new(league_params)
    if @league.save
      render json: @league, status: :created, location: api_league_path(@league)
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/leagues/1
  # PATCH/PUT /api/leagues/1.json
  def update
    if @league.update_attributes(league_params)
      head :no_content
    else
      render json: @league.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/leagues/1
  # DELETE /api/leagues/1.json
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def set_user
      @user = User.find(params[:user_id]) if params[:user_id]
    end

    def set_league
      @league = League.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def league_params
      params.require(:league).permit(:name)
    end
end