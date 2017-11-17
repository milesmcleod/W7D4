import * as apiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  apiUtil.fetchAllPokemon()
  .then(response => dispatch(receiveAllPokemon(response)))
);

export const receivePokemon = payload => ({
  type: RECEIVE_POKEMON,
  payload
});

export const requestPokemon = (id) => (dispatch) => (
  apiUtil.fetchPokemon(id)
  .then(response => dispatch(receivePokemon(response)))
);

export const newPokemon = (pokemon) => (dispatch) => (
  apiUtil.newPokemon(pokemon)
  .then(response => dispatch(receivePokemon(response)))
);
