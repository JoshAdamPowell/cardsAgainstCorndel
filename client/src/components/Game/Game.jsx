import React from 'react';
import './css/Game.css'
import './css/Scoreboard.css'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreboard: []
    }
  }

  componentDidMount(){
    this.getCookies();
  }

  getCookies(){
    let players = [];
    let allCookies = document.cookie;
    let cookieArray = allCookies.split(';');
    cookieArray.map((user) => {
      if (user.includes('User')){
        let newUser = user.split('=');
        players.push({User: newUser[1], Score: 0})
      }
    })
    this.setState({scoreboard: players})
  }

  createPlayers(){
		let divArr = this.state.scoreboard.map((user, i) => <div className="sb-player" key={i}>{user.User} <span className="sb-score">{user.Score}</span></div>)
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