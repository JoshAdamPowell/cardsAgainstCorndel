import React, { Component } from 'react';
import './App.css';
import Landing from './Landing/Landing'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: {}
    }
    this.getFlower();
  }

  getFlower() {
    fetch('/flower')
      .then(response => response.json())
      .then(data => {
        this.setState({
          flower: data
        });
      });
  }
  
  render() {
    return (
      <div className="App">
        <Landing></Landing>
      </div>
    );
  }
}

export default App;