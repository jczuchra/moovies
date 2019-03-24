import React, { Component } from 'react';
import Navbar from './componenets/layout/Navbar';
import Dashboard from './componenets/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
