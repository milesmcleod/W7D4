import React from 'react';
import { Link } from 'react-router-dom';


const pokemon = (props) => {

  return (
    <Link to={`/pokemon/${props.pokemon.id}`}>
      <li key={props.pokemon.name} className="pokelistitem">
        <p className="pokelink">{props.pokemon.id}</p>
        <img className="icon" src={props.pokemon.image_url}></img>
        <p className="pokelink">{props.pokemon.name}</p>
      </li>
    </Link>
  );
};

export default pokemon;
