import React, { Component } from 'react';


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
    const spanStyle = {
        fontSize: '.8em',
        color: 'white',
        fontWeight: 'bold',
        display: 'inline-block',
        padding: '3px 10px',
    }
    const spanStyleGF = {
        background: '#E26D5A',
    }
    const spanStyleKT = {
        background: '#533745'
    }
    const styleMain = {
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gridGap: '3rem',
        marginTop: '3em'
    }
    const h1Style = {
        marginBottom: '.2em'
    }
    const imgStyle = {
        width: '75px',
        height: '75px',
        borderRadius: '100%',
        backgroundImage: `url(${recipe.image})`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        marginRight: '15px',
        verticalAlign: 'text-bottom'
    }
    const ingredientsStyle = {
        textAlign: 'left',
        border: '1px solid #ccc',
        padding: '10px 30px'
    }
    const ingredientStyle = {
        marginBottom: '.8em'
    }
    const styleInstructions = {
        textAlign: 'left',
    }

    return (
      <div className="recipeDetail">
        <h1 style={h1Style}>
            <div style={imgStyle}>&nbsp;</div>
            {recipe.title}
        </h1>
        {recipe.glutenFree ? <span style={{...spanStyle, ...spanStyleGF}}>Gluten free</span> : null }
        {recipe.ketogenic ? <span style={{...spanStyle, ...spanStyleKT}}>Keto</span> : null }
        <div className="main" style={styleMain}>
            {recipe.extendedIngredients
                ?
                <div className="ingredients" style={ingredientsStyle}>
                    <h3>Ingredients</h3>
                    {recipe.extendedIngredients.map(item => (
                        <div style={ingredientStyle}>
                            {item.measures.us.amount} {item.measures.us.unitShort} {item.name}
                        </div>
                    ))}
                </div>
                : null }
            <div className="instructions" style={styleInstructions}>
                {recipe.instructions}
            </div>
        </div>
      </div>
    );
  }
}
