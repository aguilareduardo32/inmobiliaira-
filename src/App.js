import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/static/navbar';
import { Switch, Route } from 'react-router-dom';
import Background from './images/real-estate.jpg';
import Footer from './components/static/footer';
import { render } from "react-dom";
import Inmuebles from './components/Inmuebles'



class App extends Component {
  render() {
    return (
      <div className= "App">
      
      <Navbar />
      <Switch>
        
        <Route exact path="/" render={ () => <Home/>}/>
        <Route exact path="/inmuebles" render={ () => <Inmuebles/>}/>
        
        
      </Switch>
      <br/>
      <Footer />
      </div>

    );
  }
}

export default App;