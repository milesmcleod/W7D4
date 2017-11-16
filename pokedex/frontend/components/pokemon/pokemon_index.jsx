import React from 'react';
import Pokemon from './pokemon_index_item';


class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // debugger
    this.props.requestAllPokemon();
  }

  render(){
    const pokes = this.props.pokemon;
    return(
      <ul>
        {
          pokes.map(p=>(
            <Pokemon pokemon={p} key={p.name}/>
          ))
        }
      </ul>
    );
  }
}



export default PokemonIndex;
