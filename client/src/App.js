import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import Game from './components/Game/Game';
import Home from './components/Landing/Landing';
import EndGame from './components/EndGame/EndGame';
import Framework from './components/Framework/Framework.jsx'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/endgame" component={EndGame} />
      <Route path="/framework" component={Framework} />
    </Router>
  )
}

export default App;