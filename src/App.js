import React, { Component } from 'react';
import TestApp from './panels';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>React Panel Components</h3>
        </header>
        <section className="App-content">
          <TestApp />
        </section>
      </div>
    );
  }
}

export default App;
