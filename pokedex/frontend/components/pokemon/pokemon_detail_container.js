import { connect } from 'react-redux';
import {
  selectPokemon,
  selectAllItems
} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router-dom';
import { requestPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokemon: selectPokemon(state),
  items: selectAllItems(state.entities.items),
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail));
