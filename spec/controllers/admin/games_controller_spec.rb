require 'spec_helper'

describe API::Admin::GamesController do
  let(:current_user_admin) { FactoryGirl.create(:user, email: 'foo@bar.com', admin: true) }

  before do
    sign_in(current_user_admin)
  end

  # POST /api/admin/weeks/:week_id/games
  describe '#create' do
    it 'creates a game for a week' do
      week = FactoryGirl.create(:week)
      game_params = FactoryGirl.attributes_for(:game)
      # todo: this is weird
      game_params[:home_squad_id] = game_params[:home_squad].id
      game_params[:visiting_squad_id] = game_params[:visiting_squad].id
      expect { post :create, week_id: week.id, game: game_params }.to change(week.games, :count).by(1)
      response.should be_success
    end
    context 'when trying to create 2 games in the same week with the same home squad' do
      it 'should not create the 2nd game' do
        week = FactoryGirl.create(:week)
        squad = FactoryGirl.create(:squad)
        game1_params = FactoryGirl.attributes_for(:game, week: week, home_squad: squad)
        # todo: this is weird
        game1_params[:home_squad_id] = game1_params[:home_squad].id
        game1_params[:visiting_squad_id] = game1_params[:visiting_squad].id
        game2_params = FactoryGirl.attributes_for(:game, week: week, home_squad: squad)
        game2_params[:home_squad_id] = game2_params[:home_squad].id
        game2_params[:visiting_squad_id] = game2_params[:visiting_squad].id
        expect { post :create, week_id: week.id, game: game1_params }.to change(week.games, :count).from(0).to(1)
        expect { post :create, week_id: week.id, game: game2_params }.not_to change(week.games, :count).from(1).to(2)
      end
    end
    context 'when trying to create 2 games in the same week with the same visiting squad' do
      it 'should not create the 2nd game' do
        week = FactoryGirl.create(:week)
        squad = FactoryGirl.create(:squad)
        game1_params = FactoryGirl.attributes_for(:game, week: week, visiting_squad: squad)
        # todo: this is weird
        game1_params[:home_squad_id] = game1_params[:home_squad].id
        game1_params[:visiting_squad_id] = game1_params[:visiting_squad].id
        game2_params = FactoryGirl.attributes_for(:game, week: week, visiting_squad: squad)
        game2_params[:home_squad_id] = game2_params[:home_squad].id
        game2_params[:visiting_squad_id] = game2_params[:visiting_squad].id
        expect { post :create, week_id: week.id, game: game1_params }.to change(week.games, :count).from(0).to(1)
        expect { post :create, week_id: week.id, game: game2_params }.not_to change(week.games, :count).from(1).to(2)
      end
    end
    context 'when a squad is part of two games in a week' do
      it 'should not create the 2nd game' do
        week = FactoryGirl.create(:week)
        squad = FactoryGirl.create(:squad)
        game1_params = FactoryGirl.attributes_for(:game, week: week, home_squad: squad)
        # todo: this is weird
        game1_params[:home_squad_id] = game1_params[:home_squad].id
        game1_params[:visiting_squad_id] = game1_params[:visiting_squad].id
        game2_params = FactoryGirl.attributes_for(:game, week: week, visiting_squad: squad)
        game2_params[:home_squad_id] = game2_params[:home_squad].id
        game2_params[:visiting_squad_id] = game2_params[:visiting_squad].id
        expect { post :create, week_id: week.id, game: game1_params }.to change(week.games, :count).by(1)
        expect { post :create, week_id: week.id, game: game2_params }.to raise_error
        expect(week.games.length).to eq(1)
      end
    end

  end

  # PUT/PATCH /api/admin/weeks/:week_id/games/:id
  describe '#update' do
    context 'when the signed in user is an admin' do
      let(:week) { FactoryGirl.create(:week) }
      let(:game) { FactoryGirl.create(:game, week: week) }
      let(:starts_at) { Time.zone.now.to_date + 2.days }
      let(:home_squad) { FactoryGirl.create(:squad, name: 'Seattle Seahawks', abbrev: 'SEA') }
      let(:visiting_squad) { FactoryGirl.create(:squad, name: 'New York Giants', abbrev: 'NYG') }
      before do
        game.starts_at = starts_at
        game.home_squad = home_squad
        game.visiting_squad = visiting_squad
        game.home_squad_score = 34
        game.visiting_squad_score = 27
      end
      it 'updates a game' do
        patch :update, week_id: week.id, id: game.id, game: game.attributes
        response.should be_success
        game.reload
        expect(game.starts_at.to_date).to eq(starts_at.to_date)
        expect(game.home_squad).to eq(home_squad)
        expect(game.visiting_squad).to eq(visiting_squad)
        expect(game.home_squad_score).to eq(34)
        expect(game.visiting_squad_score).to eq(27)
      end
    end
  end

  # DELETE /api/admin/weeks/:week_id/games/:id
  describe '#destroy' do
    xit 'destroys a game' do
      game = FactoryGirl.create(:game)
      expect { delete :destroy, week_id: game.week.id, id: game.id }.to change(game.week.games, :count).by(-1)
      response.should be_success
    end
  end

end