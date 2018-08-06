import React, { Component } from 'react';
import logo from './images/discogs-64-white.png';
import Releases from './components/Releases';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Discogs</h1>
        </header>
        <Releases />
      </div>
    );
  }
}

export default App;
