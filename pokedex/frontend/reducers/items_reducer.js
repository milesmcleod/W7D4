import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_POKEMON:
      newState = merge({}, state, action.payload.items);
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
