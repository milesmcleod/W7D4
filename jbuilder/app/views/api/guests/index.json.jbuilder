json.array! @guests.where("age > ? AND age < ?", 40, 50) do |guest|
  json.id guest.id
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
