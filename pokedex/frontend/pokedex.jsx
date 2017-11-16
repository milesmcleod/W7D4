import React from 'react';
import ReactDOM from 'react-dom';
import { fetchPokemon } from './util/api_util';
import { receivePokemon, requestPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=> {

  window.receivePokemon = receivePokemon;
  window.fetchPokemon = fetchPokemon;
  window.requestPokemon = requestPokemon;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, content);
});
