import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayName from './components/displayName';

class App extends Component {
  render() {
    return (
      <div className="App">
       <DisplayName/>
       
      </div>
    );
  }
}

export default App;
