class Channel < ApplicationRecord
  validates :name, :channel_type, :owner_id, presence: true
  validates :channel_type, inclusion: { in: %w(direct_message channel) }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :messages

  has_many :members,
  class_name: :Membership

  has_many :users,
  through: :members,
  source: :membership



end
