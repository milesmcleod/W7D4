json.partial! partial: 'api/guests/guest', as: :guest
json.gifts @guest.gifts, :title, :description
