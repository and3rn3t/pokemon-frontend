import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Pokemon from "./Components/Pokemon/Pokemon";

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
    // console.log(this.state.pokemons);
    return (
      <div>
        <div>
          <h1>Pokemon Comparator</h1>
        </div>

        <Route
          path="/pokemon/:id"
          component={(routerProps) => (
            <Pokemon {...routerProps} pokemons={this.state.pokemons} />
          )}
        />
      </div>
    );
  }
}

export default App;
