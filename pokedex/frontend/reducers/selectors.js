import { values } from 'lodash';

export const selectAllPokemon = (pokemon) => {
  return values(pokemon);
};

export const selectAllItems = (items) => {
  return values(items);
};

export const selectPokemon = (state) => {
  return state.entities.pokemon[state.ui.pokeDisplay];
};

export const selectPokemonItem = (state, itemId) => {
  // return state.entities.items[itemId];
  const things = values(state.entities.items);
  const newArr = [];
  things.forEach(el => {
    if (el.id == itemId) {
      newArr.push(el);
    }
  });
  return newArr[0];
};
