import React, { Component } from 'react';
import './App.css';
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
}
export default App;