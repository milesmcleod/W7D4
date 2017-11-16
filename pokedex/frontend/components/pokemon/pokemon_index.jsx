import React from 'react';
import Pokemon from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

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
      </section>
    );
  }
}



export default PokemonIndex;
