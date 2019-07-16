import React from 'react';
import { useCookies } from 'react-cookie';
import './css/Game.css'
import './css/Scoreboard.css'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreboard: []
    }
  }

  createPlayers(){
		let divArr = this.state.scoreboard.map((user, i) => <div className="sb-player" key={i}>{user}</div>)
		return divArr;
  }
  
  scoreboardHeader(){
    let header;
    if (this.state.scoreboard.length === 1 ? header = `1 Player` : header = `${this.state.scoreboard.length} Players`);
		return header;
  }

  render() {
    return (
      <div className="game-container">
        <div className="scoreboard">
	        <div className="sb-header">{this.scoreboardHeader()}</div>
	        <div className="sb-body">{this.createPlayers()}</div>
        </div>
      </div>
    )
  }
}