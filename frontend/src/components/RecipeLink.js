import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class RecipeLink extends Component {
  render() {

  const background = this.props.baseUrl + this.props.image;
  const recipeStyle = {
      width: '100%',
      minHeight: '300px',
      background: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.5)
    ), url(${background})`,
      backgroundColor: '#ccc',
      backgroundSize: 'cover',
      display: 'block',
      backgroundPosition: 'center',
      position: 'relative',
      borderRadius: '4px',
  };
  const h2Style = {
      color: '#fff',
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      fontSize: '1.65rem',
      textShadow: '2px 4px 3px rgba(0,0,0,0.2)',
      textTransform: 'uppercase',
      width: '80%',
  }

    return (
      <Link to={`/${this.props.id}`}>
          <div style={recipeStyle}>
            <h2 style={h2Style}>{this.props.title}</h2>
          </div>
      </Link>
    );

  }
}
