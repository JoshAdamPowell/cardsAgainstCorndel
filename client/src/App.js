import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/endgame" component={EndGame} />
    </Router>
  )
=======
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
>>>>>>> LandingPage
}

export default App;