import React, { Component } from 'react';

const Style = {
    main : {
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gridGap: '3rem',
        marginTop: '3em'
    },
    span : {
        fontSize: '.8em',
        color: 'white',
        fontWeight: 'bold',
        display: 'inline-block',
        padding: '3px 10px',
    },
    spanGF : {
        background: '#E26D5A',
    },
    spanKT : {
        background: '#533745'
    },
    h1 : {
        marginBottom: '.2em'
    },
    ingredients : {
        textAlign: 'left',
        border: '1px solid #ccc',
        padding: '10px 30px'
    },
    ingredient : {
        marginBottom: '.8em'
    },
    instructions : {
        textAlign: 'left',
    },
    img : {
        width: '75px',
        height: '75px',
        borderRadius: '100%',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        marginRight: '15px',
        verticalAlign: 'text-bottom'
    }
}

export default class RecipeDetail extends Component {

    state = {
        recipe: {}
    }


    async componentDidMount() {
        const pageId = this.props.match.params.id;
        console.log(`http://localhost:5000/id?id=${pageId}`);
        try {
            const result = await fetch(`http://localhost:5000/id?id=${pageId}`);
            const recipe = await result.json();
            this.setState({
                recipe
            })
        } catch(e) {
            console.log(e);
        }
    }


  render() {
  const { recipe } = this.state;
  const imgBackground = {
      backgroundImage: `url(${recipe.image})`,
  }

    if(!recipe){
        return (
            <h3>Loading...</h3>
        )
    }
    else{
        return (
          <div className="recipeDetail">
            <h1 style={Style.h1}>
                <div style={{...Style.img, ...imgBackground}}>&nbsp;</div>
                {recipe.title}
            </h1>
            {recipe.glutenFree && <span style={{...Style.span, ...Style.spanGF}}>Gluten free</span>}
            {recipe.ketogenic && <span style={{...Style.span, ...Style.spanKT}}>Keto</span>}
            <div className="main" style={Style.main}>
                {recipe.extendedIngredients &&
                    <div className="ingredients" style={Style.ingredients}>
                        <h3>Ingredients</h3>
                        {recipe.extendedIngredients.map(item => (
                            <div style={Style.ingredient}>
                                {item.measures.us.amount} {item.measures.us.unitShort} {item.name}
                            </div>
                        ))}
                    </div>}
                <div className="instructions" style={Style.instructions}>
                    {recipe.instructions}
                </div>
            </div>
          </div>
        );
    }
  }
}
