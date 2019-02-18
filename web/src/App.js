import React, { Component } from 'react';
import logo from './doctor.png';
import './App.css';
import Form from './Testform';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          10 Meter WalkTesting Form
          </p>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
