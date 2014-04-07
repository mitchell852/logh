require 'spec_helper'

describe API::InvitationsController do
  let(:current_user) { FactoryGirl.create(:user) }
  let(:another_user) { FactoryGirl.create(:user) }

  before do
    sign_in(current_user)
  end

  # GET /leagues/:league_id/invitations
  describe '#index' do
    context 'when the current user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ current_user ]) }
      before do
        FactoryGirl.create(:invitation, league: league, email: 'foo@bar.com')
        FactoryGirl.create(:invitation, league: league, email: 'bar@foo.com')
      end
      it 'returns a list of invitations for the league' do
        get :index, league_id: league.id
        expect(response).to be_success
        expect(json.length).to eq(2)
      end
    end
    context 'when the current user is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ another_user ]) }
      before do
        FactoryGirl.create(:invitation, league: league, email: 'foo@bar.com')
        FactoryGirl.create(:invitation, league: league, email: 'bar@foo.com')
      end
      it 'returns a list of invitations for the league' do
        get :index, league_id: league.id
        expect(response.status).to eq(403)
      end
    end
  end

  # POST /leagues/:league_id/invitations
  describe '#create' do
    context 'when the current user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ current_user ]) }
      let(:invitation) { FactoryGirl.build(:invitation) }
      it 'creates a league invitation' do
        expect { post :create, league_id: league.id, invitation: invitation.attributes }.to change(league.invitations, :count).by(1)
        expect(response).to be_success
      end
      it 'sends an inviation email' do
        invitation = FactoryGirl.create(:invitation)
        expect(ActionMailer::Base.deliveries.last.to).to include(invitation.email)
      end
    end
    context 'when the current user is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ another_user ]) }
      let(:invitation) { FactoryGirl.build(:invitation) }
      it 'returns forbidden and does not creates a league invitation' do
        expect { post :create, league_id: league.id, invitation: invitation.attributes }.to change(league.invitations, :count).by(0)
        expect(response.status).to eq(403)
      end
    end
  end

  # DELETE /leagues/:league_id/invitations/:id
  describe '#destroy' do
    context 'when the current user is a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ current_user ]) }
      it 'deletes the invitation' do
        invite = FactoryGirl.create(:invitation, league: league)
        expect { delete :destroy, league_id: league.id, id: invite.id }.to change(league.invitations, :count).by(-1)
        expect(response.status).to eq(204)
      end
    end
    context 'when the current user is not a commish of the league' do
      let(:league) { FactoryGirl.create(:league, commishes: [ another_user ]) }
      it 'returns forbidden and does not delete the invitation' do
        invite = FactoryGirl.create(:invitation, league: league)
        expect { delete :destroy, league_id: league.id, id: invite.id }.to change(league.invitations, :count).by(0)
        expect(response.status).to eq(403)
      end
    end

  end

end