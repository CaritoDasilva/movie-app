import React, { Component } from 'react';
import './App.css';
import Router from './Router/routerIndex';
import { withRouter } from 'react-router'

import SideNavApp from './Sidenav/sideNavIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavApp />
        <h1>Movie App</h1>
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
