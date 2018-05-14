class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :channel
  # *** does it need channnel id??

end
