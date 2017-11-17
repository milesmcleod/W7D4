import React from 'react';
import Pokemon from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Link } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';


class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokes = this.props.pokemon;
    return(
      <section>
        <ul className="pokedex">
          {
            pokes.map(p=>(
              <Pokemon pokemon={p} key={p.name}/>
            ))
          }
        </ul>
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
        <Route exact path="/" component={PokemonFormContainer} />
        <Link to="/">
          <h1>Create Your Pokemon</h1>
        </Link>

      </section>
    );
  }
}



export default PokemonIndex;
