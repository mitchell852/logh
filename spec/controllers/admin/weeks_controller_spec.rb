require 'spec_helper'

describe API::Admin::WeeksController do
  let(:current_user_admin) { FactoryGirl.create(:user, email: 'foo@bar.com', admin: true) }

  before do
    sign_in(current_user_admin)
  end

  # POST /api/admin/seasons/:season_id/weeks
  describe '#create' do
    context 'when an admin attempts to create a week where all required fields are provided' do
      it 'creates the week for the season where starts_at is converted to a date with no time' do
        season = FactoryGirl.create(:season)
        week_params = FactoryGirl.attributes_for(:week, starts_at: Time.zone.now + 1.day)
        week_params[:week_type_id] = week_params[:week_type].id
        expect { post :create, season_id: season.id, week: week_params }.to change(season.weeks, :count).by(1)
        expect(response).to be_success
        expect(Week.last[:starts_at]).to eq(Time.zone.now.to_date + 1.day)
      end
    end
    context 'when an admin attempts to add the same week number to 2 different seasons' do
      it 'creates the week for each season' do
        season1 = FactoryGirl.create(:season, name: '2014-15 NFL Season')
        season2 = FactoryGirl.create(:season, name: '2015-16 NFL Season')
        FactoryGirl.create(:week, number: 1, season: season1)
        week1_season2_params = FactoryGirl.attributes_for(:week, number: 1, season: season2)
        week1_season2_params[:week_type_id] = week1_season2_params[:week_type].id
        expect { post :create, season_id: season2.id, week: week1_season2_params }.to change(season2.weeks, :count).by(1)
      end
    end
    context 'when an admin attempts to create 2 weeks in one season with the same week number' do
      it 'should not create the 2nd week' do
        season = FactoryGirl.create(:season)
        FactoryGirl.create(:week, number: 1, season: season)
        bad_week_params = FactoryGirl.attributes_for(:week, number: 1)
        bad_week_params[:week_type_id] = bad_week_params[:week_type].id
        expect { post :create, season_id: season.id, week: bad_week_params }.not_to change(season.weeks, :count).by(1)
      end
    end
  end

  # PATCH/PUT /api/admin/seasons/:season_id/weeks/:id
  describe '#update' do
    context 'when an admin attempts to update a week' do
      let(:week) { FactoryGirl.create(:week) }
      let(:starts_at) { Time.zone.now }
      let(:playoff_week_type) { FactoryGirl.create(:playoff_week_type) }
      before do
        week.starts_at = starts_at
        week.week_type = playoff_week_type
        week.complete = true
      end
      it 'updates the week' do
        patch :update, season_id: week.season.id, id: week.id, week: week.attributes
        response.should be_success
        week.reload
        expect(week.starts_at).to eq(starts_at.to_date)
        expect(week.week_type).to eq(playoff_week_type)
        expect(week.complete).to be_true
      end
    end
  end

  # DELETE /api/admin/seasons/:season_id/weeks/:id
  describe '#destroy' do
    context 'when an admin attempts to delete a week for a season' do
      xit 'deletes the week' do
        week = FactoryGirl.create(:week)
        expect { delete :destroy, season_id: week.season.id, id: week.id }.to change(week.season.weeks, :count).by(-1)
        response.should be_success
      end
    end
  end

end
