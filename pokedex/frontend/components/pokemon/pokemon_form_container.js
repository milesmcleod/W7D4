import { connect } from 'react-redux';
import { newPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  newPokemon: (pokemon)=>dispatch(newPokemon(pokemon))
});

export default withRouter(connect (
  null,
  mapDispatchToProps
)(PokemonForm));
