import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/static/navbar';
import { Switch, Route } from 'react-router-dom';
import Background from './images/real-estate.jpg';
import Footer from './components/static/footer';
import { render } from "react-dom";
import Inmuebles from './components/Inmuebles'
import InfoSoli from './components/InfoSoli'
import InfoComRen from './components/InfoComRen'
import FormaEnviada from './components/FormaEnviada'
import ContactoBase from './components/ContactoBase'
import DetallesInmuebles from './components/InmuebleDetails'
import Add from './components/Add'


class App extends Component {
  
  render() {
    return (
      <div className= "App">
      
      <Navbar />
      
      <Switch>
        
        <Route exact path="/" render={ () => <Home/>}/>
        <Route exact path="/inmuebles" render={ () => <Inmuebles/>}/>
        <Route exact path="/informesVenta" render={ () => <InfoSoli/> } />
        <Route exact path="/informesComRen" render={() => <InfoComRen/>} />
        <Route exact path="/contactoBase" render={() => <ContactoBase />} />
        <Route exact path="/:id" render={() => <DetallesInmuebles  {...this.props} />} />
        <Route exact path="/formaEnviada" render={() => <FormaEnviada/>} />
        <Route exact path="/add" render={() => <Add/>} />
        
        
      </Switch>
     
      
      <Footer />
     
      </div>

    );
  }
}

export default App;