class API::LeaguesController < API::BaseController
  before_action :_set_season
  before_action :_set_league, only: [:show, :update, :destroy]
  before_action :_verify_league_management, only: [:update, :destroy]
  before_action :_verify_start_week, only: [:create, :update]

  # GET /api/seasons/:season_id/leagues/public.json
  def public
    @leagues = @season.leagues.public
    respond_with @leagues, status: :ok
  end

  # GET /api/seasons/:season_id/leagues/private.json
  def private
    @leagues = @season.leagues.private
    respond_with @leagues, status: :ok
  end

  # GET /api/seasons/:season_id/leagues.json
  def index
    @leagues = @season.leagues
    respond_with @leagues, status: :ok
  end

  # GET /api/seasons/:season_id/leagues/1.json
  def show
    respond_with @league, status: :ok
  end

  # POST /api/seasons/:season_id/leagues.json
  def create
    @league = @season.leagues.new(_league_params)
    @league.commishes << current_user
    if @league.save
      render json: { league_id: @league.id, message: { type: SUCCESS, content: "#{@league[:name]} league created" } }, status: :ok
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # PATCH/PUT /api/seasons/:season_id/leagues/1.json
  def update
    return forbidden('Cannot update a league that has started') if @league.started?
    if @league.update(_league_params)
      render json: { message: { type: SUCCESS, content: "#{@league[:name]} league updated" } }, status: :ok
    else
      error(@league.errors.full_messages.join(', '), WARNING, :unprocessable_entity)
    end
  end

  # DELETE /api/seasons/:season_id/leagues/1.json
  def destroy
    @league.destroy
    head :no_content
  end

  private

    def _league_params
      params.require(:league).permit(:name, :public, :start_week_id, :password, :max_teams_per_user)
    end

    def _set_season
      @season = Season.find(params[:season_id])
    end

    def _set_league
      @league = @season.leagues.find(params[:id])
    end

    def _verify_league_management
      forbidden('Only the commish can update a league') unless _is_commish_of(@league)
    end

    def _verify_start_week
      start_week = Week.find(_league_params[:start_week_id])
      forbidden('Start week is invalid') unless start_week.starts_at.to_date > Time.zone.now.to_date
    end

    def _is_commish_of(league)
      current_user.managed_leagues.include?(league)
    end

    def _has_team_in(league)
      current_user_leagues = current_user.teams.map(&:league)
      current_user_leagues.include?(league)
    end

end
