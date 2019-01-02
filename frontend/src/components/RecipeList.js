import React, { Component } from 'react';
import '../App.css';

import RecipeLink from './RecipeLink';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        queryTerms: '',
        items: [],
        baseUri: '',
        randomRecipe: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.randomRecipe = this.randomRecipe.bind(this);
}

componentDidMount() {
    const API = "http://localhost:5000/query?query=" + this.state.queryTerms;

    fetch(API)
     .then(response => response.json())
     .then(data => this.setState({
         items: data.results,
         baseUri: data.baseUri,
         isLoaded: true,
      }));
}

handleChange(event) {

    this.setState({
        queryTerms: event.target.value
    });

    let API = "http://localhost:5000/query?query=" + event.target.value;

    fetch(API)
     .then(response => response.json())
     .then(data => this.setState({
         items: data.results,
         baseUri: data.baseUri,
         isLoaded: true,
      }));

  }

randomRecipe() {

    let API = "http://localhost:5000/random";

    fetch(API)
     .then(response => response.json())
     .then(data => this.setState({
         randomRecipe: data.recipes[0]
      }));
}


  render() {
    const formStyle = {
        maxWidth: '700px',
        margin: '0 auto 2em'
    }
    return (
      <div className="App">
        <div style={formStyle}>
            <h1>
                What would you like to cook today?
            </h1>
            <form onSubmit={this.handleChange}>
                <input type="text"
                    value={this.state.queryTerms}
                    onChange={this.handleChange}
                    >
                </input>

            </form>
            <h2>Or...</h2>
            <button onClick={this.randomRecipe}>
                I don't know, give me a random recipe.
            </button>
        </div>
        {this.state.randomRecipe ?
            <RecipeLink
                baseUrl=""
                title={this.state.randomRecipe.title}
                image={this.state.randomRecipe.image}
                id={this.state.randomRecipe.id}
                id={this.state.randomRecipe.id}
            />
            : null}
        <div className="recipes">
            {this.state.items.map(item => (
                <RecipeLink
                    baseUrl={this.state.baseUri}
                    title={item.title}
                    image={item.image}
                    id={item.id}
                    key={item.id}
                />
            ) )}
        </div>
      </div>
    );
  }
}

export default App;
