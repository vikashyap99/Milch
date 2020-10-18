import React, { Component } from 'react';
import MainComponents from './Components/MainComponent'
import HeaderComponents from './Components/HeaderComponent'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import {BrowserRouter,Switch, Route,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/FooterComponent';
import './App.css'

class App extends Component {
  render() {
    return (

    <div className='app'>
    <BrowserRouter >
    <HeaderComponents />
      <Switch>
      <Route path="/home" component={MainComponents} />
      <Route path="/signIn" component={SignIn} />
      <Redirect to="/home" />
      
      </Switch>   
      
      <Footer />
    </BrowserRouter>
    
  </div>
       
    );
  }
}

export default App; 