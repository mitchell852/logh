FactoryGirl.define do
  sequence(:email) { |n| "foo#{n}@bar.com" }

  factory :user do
    first_name              'Billy Bob'
    last_name               'Thorton'
    email
    password                'foobar852'
    password_confirmation   'foobar852'
  end

  factory :session do
    email     'foo@bar.com'
    password  'foobar852'
  end

  factory :league do |league|
    sequence(:name) { |n| "Bad News Bears#{n}" }
    league.association      :season
    start_week_id           { FactoryGirl.create(:week).id }
  end

  factory :team do |team|
    team.association  :league
    sequence(:name) { |n| "Rubber Duckies#{n}" }
    alive             true
    active            true
  end

  factory :pick do |pick|
    pick.association  :team
    pick.association  :week
    pick.association  :game
    week_type         { FactoryGirl.create(:week_type) }
    squad             { FactoryGirl.create(:squad) }
  end

  factory :season do
    name              '2014-15 NFL Season'
    active            true
    ends_at           Time.zone.parse('2015-02-02 06:00')
  end

  factory :week do |week|
    number              1
    starts_at           Time.zone.now + 1.day
    week_type           { FactoryGirl.create(:week_type) }
    week.association    :season
  end

  factory :game do |game|
    game.association      :week
    starts_at             Time.zone.now
    home_squad            { FactoryGirl.create(:squad) }
    visiting_squad        { FactoryGirl.create(:squad) }
  end

  factory :loser do |loser|
    loser.association :week
    loser.association :game
    loser.association :squad
  end

  factory :squad do
    name    'Denver Broncos'
    abbrev  'DEN'
  end

  factory :invitation do |invitation|
    invitation.association  :league
    email                   'foo@bar.com'
  end

  factory :week_type do
    description   'Regular Season'
    factory :playoff_week_type do
      description   'Playoff'
    end
  end

end
