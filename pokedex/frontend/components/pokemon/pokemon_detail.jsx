import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import PokemonFormContainer from './pokemon_form_container';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.requestPokemon(id);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.requestPokemon(newProps.match.params.id);
    }
  }

  render() {

    if (!this.props.pokemon) {
      return (
        <div></div>
      );
    }
    return(
      <section className="pokemon-detail">
        <img src={this.props.pokemon.image_url}></img>
        <div>
          <h2>{this.props.pokemon.name}</h2>
          <ul>
            <li>Type:{this.props.pokemon.poke_type}</li>
            <li>Attack:{this.props.pokemon.attack}</li>
            <li>Defense:{this.props.pokemon.defense}</li>
            <li>Moves:{
                this.props.pokemon.moves.map(el => el + " ")
              }</li>
          </ul>
        </div>
        <br/>
        <ul className="item-images">
          {
            this.props.items.map(el => (
              <Link to={`/pokemon/${this.props.pokemon.id}/item/${el.id}`}>
                <li><img src={el.image_url}></img></li>
              </Link>
            ))
          };
        </ul>
        <Route path="/pokemon/:id/item/:itemId" component={ItemDetailContainer} />

      </section>
    );
  }
}

export default PokemonDetail;
