object @week
attributes :id, :week_type_id, :number, :season_id, :starts_at, :complete

node(:display) { |week| "Week #{week.number} (#{week.starts_at.strftime("%m/%d/%Y")})" }