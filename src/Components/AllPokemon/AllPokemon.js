import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllPokemon extends Component {
  render() {
    const allPokemon = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Link to={`/pokemon/${pokemon.id}`}>{pokemon.pokemonName}</Link>
        </li>
      );
    });
    return (
      <div>
        <h1>All Pokemon</h1>
        <ul>{allPokemon}</ul>
      </div>
    );
  }
}

export default AllPokemon;
