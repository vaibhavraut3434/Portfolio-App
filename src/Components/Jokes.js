import React, { Component } from "react";

class Jokes extends Component {
  state = { jokes: {} };

  componentDidMount() {
    fetch("http://localhost:3005/random_joke")
    .then( response => response.json() )
    .then( json => this.setState( {jokes: json} ))

  }

  render() {
    const { setup, punchline} = this.state.jokes;

      return(
          <div>
              <h2>Highlighted Joke</h2>
              <p>{setup} <em>{punchline}</em></p>
          </div>
      )
  }
}

export default Jokes;