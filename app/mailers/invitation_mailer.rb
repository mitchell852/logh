class InvitationMailer < ActionMailer::Base
  default from: 'no-reply@loseorgohome.com'

  def league_invitation(invitation)
    @invitation = invitation
    mail to: invitation.email, subject: "You have been invited to join a league at loseorgohome.com"
  end

  def request_invitation(league, requestor_email, requestor_message)
    @league = league
    @requestor_email = requestor_email
    @requestor_message = requestor_message
    mail to: @league.commish_emails, subject: "An invitation has been requested for the #{league.name} league"
  end

end
