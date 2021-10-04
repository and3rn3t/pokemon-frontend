import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const pokemonDetail = this.props.pokemons.find((pokemon) => {
      return pokemon.id === this.props.match.params.id;
    });
    // const pokemonStats = pokemonDetail.Stats.map((stat) => {
    //   return <li key={stat.id}>{stat.statName}</li>;
    // });

    // console.log(pokemonDetail);

    return (
      <div>
        <h3>{pokemonDetail.pokemonName}</h3>
        {/* <ul>{pokemonStats}</ul> */}
      </div>
    );
  }
}

export default Pokemon;
