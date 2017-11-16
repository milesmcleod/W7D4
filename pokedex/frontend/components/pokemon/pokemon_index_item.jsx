import React from 'react';


const pokemon = (props) => {

  return (
    <li key={props.pokemon.name}>
      <h3>{props.pokemon.name}</h3>
      <img src={props.pokemon.image_url}></img>
    </li>
  );
};

export default pokemon;
