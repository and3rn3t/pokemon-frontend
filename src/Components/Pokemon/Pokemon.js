import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const pokemons = this.props.pokemons.find((pokemon) => {
      return pokemon.id === this.props.match.params.id;
    });

    const abilities = pokemons.Abilities.map((ability) => {
      return <li key={ability.id}>{ability.abilityName}</li>;
    });

    return (
      <div>
        <h3>{pokemons.name}</h3>
        <ul>{abilities}</ul>
      </div>
    );
  }
}

export default Pokemon;
