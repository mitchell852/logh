object @game
attributes :id, :note, :starts_at, :week_id, :home_squad_id, :visiting_squad_id, :home_squad_score, :visiting_squad_score, :innings, :overtimes, :shootout, :postponed, :tbd, :if_necessary, :playoff, :complete
node(:started) { |game| game.started? }
node(:locked) { |game| game.locked? }
node(:display) { |game| game.display }
node(:week_name) { |game| game.week.name }
node(:week_type) { |game| game.week.week_type.description }
node(:start_display) { |game| game.start_display }
node(:week_type_id) { |game| game.week_type_id }
node(:squads) { |game| game.squads }
node(:pick_count) { |game| game.picks.count }
node(:ot_display) do |game|
  game.ot_display
end

