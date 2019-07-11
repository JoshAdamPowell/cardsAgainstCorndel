import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import Game from './components/Game/Game';
import io from 'socket.io-client';
import Home from './components/Landing/Landing';
import EndGame from './components/EndGame/EndGame';
import Framework from './components/Framework/Framework'

function App() {
  console.log('connecting')
  var socket = io.connect('http://localhost:4001');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
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