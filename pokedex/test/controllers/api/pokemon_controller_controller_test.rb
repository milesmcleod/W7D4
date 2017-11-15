require 'test_helper'

class Api::PokemonControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pokemon_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get api_pokemon_controller_show_url
    assert_response :success
  end

end
