import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Wrapper from './wrapper';
import Photo from './photo' ; 
import Title from './title';
import logo from './logo.png'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Wrapper>

      <Photo src={logo} />
    
      <Title label="Aziz"style={{color:'red'}}/>
    
      
    
    
    </Wrapper>
    
    
    );
  }
}

export default App;
