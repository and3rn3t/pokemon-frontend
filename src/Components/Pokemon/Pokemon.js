import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const pokemonDetail = this.props.pokemons.find((pokemon) => {
      return pokemon.pokeId == this.props.match.params.id;
    });
    const pokemonStats = pokemonDetail.Stats.map((stat) => {
      return <li key={stat.id}>{stat.statName}: {stat.baseStat}</li>;
    });
    const pokemonTypes = pokemonDetail.Types.map((type) => {
      return <li key={type.id}>{type.typeName}</li>;
    });
    const pokemonAbilities = pokemonDetail.Abilities.map((ability) => {
      return <li key={ability.id}>{ability.abilityName}</li>;
    });

    return (
      <div>
        <h2>{pokemonDetail.pokemonName}</h2>
        <h3>Important Info:</h3>
        National Pokedex ID: {pokemonDetail.pokemonId}<br/>
        Experience: {pokemonDetail.baseExperience}<br/>
        Height: {pokemonDetail.height} dm<br/>
        Weight: {pokemonDetail.weight} hg

        <h3>Species Info:</h3>
        Generation: {pokemonDetail.PokemonSpecy.generation}<br/>
        Happiness: {pokemonDetail.PokemonSpecy.baseHappiness}<br/>
        Capture Rate: {pokemonDetail.PokemonSpecy.captureRate}<br/>

        <h3>Types:</h3>
        <ul>{pokemonTypes}</ul>

        <h3>Abilities:</h3>
        <ul>{pokemonAbilities}</ul>

        <h3>Stats:</h3>
        <ul>{pokemonStats}</ul>
      </div>
    );
  }
}

export default Pokemon;
