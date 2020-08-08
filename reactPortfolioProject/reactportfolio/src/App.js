import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './nubugLogo2.png';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
       <Navbar></Navbar>
       <NavbarBrand href="./nubugLogo2.png">Nubug</NavbarBrand>
      </div>
    );
  }

  }
  

export default App;
