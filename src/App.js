import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Switch , Route , NavLink } from 'react-router-dom';
import {Input,Output } from './Components';

class App extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <BrowserRouter>
      <div >
        <h1>Homework</h1>
        <ul>
          <li><NavLink to={{pathname:'/input'}} activeClassName="active">Input</NavLink></li>
          
        </ul>
        <div>
          <Route path="/input" component={Input} />
          <Route path="/output" component={Output}  />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
