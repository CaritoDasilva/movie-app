import React, { Component } from 'react';
import './App.css';
import Board from './Board/boardIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MIS PELIS FAVORITAS</h1>
        <Board />
      </div>
    );
  }
}

export default App;
