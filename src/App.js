import React, { Component } from 'react';
import MainComponents from './Components/MainComponent'
import HeaderComponents from './Components/HeaderComponent'
import SignIn from './Components/Auth/SignIn'
import {BrowserRouter,Switch, Route,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Components/HeaderComponent';

class App extends Component {
  render() {
    return (

    <div>
    <BrowserRouter >
    <HeaderComponents />
      <Switch>
      <Route path="/home" component={MainComponents} />
      <Route path="/signup" component={SignIn} />
      <Redirect to="/home" />
      
      </Switch>   
      
    </BrowserRouter>
    
  </div>
       
    );
  }
}

export default App; 