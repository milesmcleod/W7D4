json.array! @parties, :name, :location, :guests
# select_guests = .where("age > ? AND age < ?", 40, 50)

# json.array! @parties do |party|
#   json.name party.name
#   json.location party.location
#   json.guests party.guests.where("age > ? AND age < ?", 40, 50) do |guest|
#     json.name = guest.name
#     json.gifts = guest.gifts
#   end
# end
