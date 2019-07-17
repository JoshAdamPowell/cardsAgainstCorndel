import React from 'react';
import './css/Game.css'
import './css/Scoreboard.css'
import cardService from './services/cardService.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreboard: [],
      whiteCards: [],
      blackCards: []
    }
  }

  componentDidMount(){
    this.getCookies();
    document.body.style.backgroundColor = "#dadada"
  }

  createBlackCard(){
    let body = cardService.generateBlackBody();
    let card = <div className="black-card">
        <div className="black-card-body" dangerouslySetInnerHTML={{__html: body}}>
        </div>
      </div>
    let cardArr = this.state.blackCards;
    cardArr.push(card);
    this.setState({blackCards: cardArr})
  }

  createWhiteCard(){
    let body = cardService.generateWhiteBody();
    let card = <div className="white-card">
        <div className="white-card-body" dangerouslySetInnerHTML={{__html: body}}>
        </div>
      </div>
    let cardArr = this.state.whiteCards;
    cardArr.push(card);
    this.setState({whiteCards: cardArr})
  }

  deleteBlackCard(){
    let cardArr = this.state.blackCards;
    cardArr.shift();
    this.setState({blackCards: cardArr});
  }

  deleteWhiteCard(){
    let cardArr = this.state.whiteCards;
    cardArr.shift();
    this.setState({whiteCards: cardArr});
  }

  displayBlackCards(){
    return this.state.blackCards;
  }

  displayWhiteCards(){
    return this.state.whiteCards;
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

        <section className="game-top">
          <div className="game-scoreboard">
            <div className="sb-header">{this.scoreboardHeader()}</div>
            <div className="sb-body">{this.createPlayers()}</div>
          </div>
          <button className="btn btn-black" onClick={() => this.createBlackCard()} type="submit">Create Black Card</button>
          <button className="btn btn-black" onClick={() => this.createWhiteCard()} type="submit">Create White Card</button>
          <button className="btn btn-black" onClick={() => this.deleteBlackCard()} type="submit">Delete Black Card</button>
          <button className="btn btn-black" onClick={() => this.deleteWhiteCard()} type="submit">Delete White Card</button>
        </section>

        <section>
          <div className="bc-container">
            {this.displayBlackCards()}
          </div>
        </section>

        <section>
          <div className="wc-container">
            {this.displayWhiteCards()}
          </div>
        </section>
      </div>
    )
  }
}