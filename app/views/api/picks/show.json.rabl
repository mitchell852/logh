object @pick
attributes :id, :team_id, :squad_id, :week_type_id, :correct
node(:locked) { |pick| pick.locked? }
node(:week_display) { |pick| pick.week.display }
node(:game_display) do |pick|
  if pick.locked? || pick.coach_emails.include?(@user.email)
    "#{pick.game.squads[0][:name]} [ #{pick.game.visiting_squad_score} ] @ #{pick.game.squads[1][:name]} [ #{pick.game.home_squad_score} ]"
  else
    ""
  end
end
node(:squad_name) do |pick|
  if pick.locked? || pick.coach_emails.include?(@user.email)
    pick.squad.name
  else
    "Hidden"
  end
end
