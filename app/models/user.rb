class User < ActiveRecord::Base
  has_many :leagues
  has_many :teams
end