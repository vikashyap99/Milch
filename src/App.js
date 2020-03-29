import React, { Component } from 'react';
import HeaderComponents from './Components/HeaderComponent'
import MainComponents from './Components/MainComponent'
import FooterComponents from './Components/FooterComponent'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponents />
        <MainComponents />
        <FooterComponents />
      </div>
    );
  }
}

export default App;