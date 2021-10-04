import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Pokemon from "./Components/Pokemon/Pokemon";
import AllPokemon from "./Components/AllPokemon/AllPokemon";

const apiUrl =
  process.env.REACT_APP_BACKEND_URL ||
  "https://pokemon-comparator-backend.herokuapp.com/api/pokemon";
// "https://localhost:3000/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }

  async fetchPokemons() {
    let results = await axios.get(apiUrl);
    this.setState({ pokemons: results.data.pokemons });
  }

  async componentDidMount() {
    await this.fetchPokemons();
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">
            <h1>Pokemon Comparator</h1>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <AllPokemon pokemons={this.state.pokemons} />}
            />
            <Route
              path="/pokemon/:id"
              component={(routerProps) => (
                <Pokemon {...routerProps} pokemons={this.state.pokemons} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
