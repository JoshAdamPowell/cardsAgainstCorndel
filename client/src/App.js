import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import Game from './components/Game/Game';
import Home from './components/Landing/Landing';
import EndGame from './components/EndGame/EndGame';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/endgame" component={EndGame} />
    </Router>
  )
}

export default App;