import React, { Component } from 'react';
import './App.css';
import Board from './Board/boardIndex';
import SideNavApp from './Sidenav/sideNavIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavApp />
        <h1>MIS PELIS FAVORITAS</h1>
        <Board />
      </div>
    );
  }
}

export default App;
