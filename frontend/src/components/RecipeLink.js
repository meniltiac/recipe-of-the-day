import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Style = {
    recipe : {
        width: '100%',
        minHeight: '300px',
        backgroundColor: '#ccc',
        backgroundSize: 'cover',
        display: 'block',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '4px',
    },
    h2 : {
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
    },

}

export default class RecipeLink extends Component {
  render() {

      const background = this.props.baseUrl + this.props.image;
      const backgroundStyle = {
          background: `linear-gradient(
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.5)
        ), url(${background})`,
      };

    return (
      <Link to={`/${this.props.id}`}>
          <div style={{...Style.recipe, ...backgroundStyle}}>
            <h2 style={Style.h2}>{this.props.title}</h2>
          </div>
      </Link>
    );

  }
}
