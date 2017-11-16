json.pokemon do
  json.set! @pokemon.id do
    json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
    json.image_url asset_path(@pokemon.image_url)
  end
end

json.items do
  json.array! @pokemon.items
end

json.ui do
  json.pokeDisplay @pokemon.id
end
