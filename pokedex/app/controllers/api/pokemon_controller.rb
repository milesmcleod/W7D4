class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    # newarr = []
    # newarr.push(pokemon_params["move_1"])
    # newarr.push(pokemon_params["move_2"])
    # new_poke = pokemon_params
    # new_poke["moves"] = newarr
    # new_poke["move_2"] = nil
    # new_poke["move_1"] = nil
    # debugger
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save!
      render :show
    end
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
