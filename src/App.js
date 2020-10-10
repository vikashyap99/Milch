import React, { Component } from 'react';
import HeaderComponents from './Components/HeaderComponent'
import MainComponents from './Components/MainComponent'
import FooterComponents from './Components/FooterComponent'
import SignIn from './Components/Auth/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (

    <div>
      
    <HeaderComponents />
    <SignIn />
    <MainComponents />
    <FooterComponents />
  </div>
       
    );
  }
}

export default App; 