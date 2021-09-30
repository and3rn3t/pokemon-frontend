import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

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
      <div>
        <h1>Pokemon Comparator</h1>
      </div>
    );
  }
}

export default App;
