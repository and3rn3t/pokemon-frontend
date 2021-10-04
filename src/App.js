import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Pokemon from "./Components/Pokemon/Pokemon";
import AllPokemon from "./Components/AllPokemon/AllPokemon";

const apiUrl =
  process.env.REACT_APP_BACKEND_URL ||
  "https://pokemon-comparator-frontend.herokuapp.com/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    axios.get(`${apiUrl}/pokemon`).then((response) => {
      this.setState({
        artists: response.data.pokemons,
      });
    });
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
