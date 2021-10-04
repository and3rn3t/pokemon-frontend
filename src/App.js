import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Pokemon from "./Components/Pokemon/Pokemon";
import AllPokemon from "./Components/AllPokemon/AllPokemon";

class App extends Component {
  constructor() {
    super();
    this.apiUrl = "http://localhost:3000/api/pokemon";
    this.state = {
      pokemons: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(this.apiUrl);
    this.setState({ pokemons: response.data.pokemons });
  }
  
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/"><h1>Pokemon Comparator</h1></Link>
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
