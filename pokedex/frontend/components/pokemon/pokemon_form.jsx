import React from 'react';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: ["",""]
    };
  }

  handleClick(e){
    // debugger
    e.preventDefault();
    this.props.newPokemon( this.state );
  }

  handleChange(e){
    const key = e.target.name;
    console.log(this.state);
    if(key === "move_1"){
      this.state.moves[0] = e.target.value;
      this.setState();
    } else if (key === "move_2"){
      this.state.moves[1] = e.target.value;
      this.setState();
    } else {
      this.setState({
        [key]: e.target.value
      });
    }
  }
  render(){
    const TYPES = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ];


    return(
      <form onChange={(e)=> this.handleChange(e)} onSubmit={(e)=>this.handleClick(e)}>
        <input name="name" type="text" placeholder="name"></input>
        <input name="image_url" type="text" placeholder="image_url"></input>
        <select name="poke_type">
          {TYPES.map(e=><option value={`${e}`}>{e}</option>)}
        </select>
        <input name="attack" type="number" placeholder="attack"></input>
        <input name="defense" type="number" placeholder="defense"></input>
        <input name="move_1" type="text" placeholder="move 1"></input>
        <input name="move_2" type="text" placeholder="move 2"></input>
        <input type="submit" value="Create Pokemon"></input>
      </form>
    );
  }
}

export default PokemonForm;
