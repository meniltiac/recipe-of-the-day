import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import './App.css';

import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'

import logo from './logo.svg'

const headerStyle = {
    textAlign: 'left',
    padding: '15px 45px 5px',
    fontSize: '1.4em',
    fontWeight: 'bold',
    width: '100%',
    background: '#ffffff',
    borderBottom:'1px solid #eee',
    marginTop: '0',
    position: 'fixed',
    top: '0',
    zIndex: '90',
    boxShadow: '0px 1px 10px #eee'
}

const anchorStyle = {
    textDecoration: 'none'
}

const logoStyle = {
    width: '35px',
    marginLeft: '5px',
    display:'inline-block',
    verticalAlign: 'middle'
}

const App = () => (
    <Router>
        <div className="App">
            <header className="App-header" style={headerStyle}>
                <a href="/" style={anchorStyle}>
                    Recipe Finder
                    <img src={logo} style={logoStyle}/>
                </a>
            </header>
            <div className="Main">
                <Switch>
                    <Route exact path="/" component={RecipeList} />
                    <Route exact path="/:id" component={RecipeDetail} />
                </Switch>
            </div>
        </div>
    </Router>
);

export default App;
