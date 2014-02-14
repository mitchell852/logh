class League < ActiveRecord::Base
  belongs_to :user
  has_many :teams

  scope :active, -> { where(active: true) }
end