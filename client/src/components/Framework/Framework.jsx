import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/mode/css';
import './css/Cards.css';
import './css/Framework.css';
import blackCards from './data/black-cards.js'
import whiteCards from './data/white-cards.js'
import { scoreboardHTML, scoreboardCSS, whiteHTML, whiteCSS, blackHTML, blackCSS } from './data/markup-strings.js'
import usernames from '../Landing/usernames.js'

export default class Framework extends React.Component {
  constructor(props){
		super(props)
		this.state = {
			blackCard: null,
			whiteCard: null,
			scoreboard: []
		}
  }

  componentDidMount(){
		document.body.classList.toggle('dark-body')
		this.changeBlackBody();
		this.changeWhiteBody();
		this.changeScoreboard();
	}
	
	changeBlackBody(){
		let ranBlackCard = blackCards[Math.floor(Math.random() * blackCards.length)];
		this.setState({
			blackCard: ranBlackCard.text
		})
	}

	changeWhiteBody(){
		let ranWhiteCard = whiteCards[Math.floor(Math.random() * whiteCards.length)];
		this.setState({
			whiteCard: ranWhiteCard
		})
	}

	createPlayers(){
		let divArr = this.state.scoreboard.map((user, i) => <div className="sb-player" key={i}>{user}</div>)
		return divArr;
	}

	scoreboardHeader(){
		let header;
		if (this.state.scoreboard.length <= 1 ? header = `1 Player` : header = `${this.state.scoreboard.length} Players`);
		return header;
	}

	changeScoreboard(){
		let ranNum = Math.floor(Math.random() * usernames.length - 1) + 2
		let ranUsers = [];

		for (let i = 0; i < ranNum; i++){
			ranUsers.push(usernames[i].name);
		}
		this.setState({
			scoreboard: ranUsers
		})
	}

  render(){
    return (
			<div className="container">
				<div className="header-body">
					This is the framework playground and style guide for Cards Against Corndel.<br/>
					<h5>Reference material used for designing the styling for CAC.</h5>
				</div>

				<div className="section">
					<div className="white-card">
						<div className="white-card-body" dangerouslySetInnerHTML={{__html: this.state.whiteCard}}>
						</div>
					</div>
					<div className="section-side">
						<h6 className="section-header">HTML</h6>
						<AceEditor
							className="editor"
							mode="html"
							theme="github"
							name="code-editor"
							width="300px"
							height="300px"
							value={whiteHTML}
							maxLines={4}
							setOptions={{readOnly: true}}
						/>
						<h6 className="section-header">CSS</h6>
						<AceEditor
							className="editor"
							mode="css"
							theme="github"
							name="code-editor"
							width="300px"
							height="300px"
							value={whiteCSS}
							maxLines={13}
							setOptions={{readOnly: true}}
						/>
						<button className="btn-changer" onClick={() => this.changeWhiteBody()} type="submit">Test Body</button>
					</div>
				</div>

				<div className="section">
					<div className="black-card">
						<div className="black-card-body" dangerouslySetInnerHTML={{__html: this.state.blackCard}}>
						</div>
					</div>
					<div className="section-side">
						<h6 className="section-header">HTML</h6>
						<AceEditor
							className="editor"
							mode="html"
							theme="github"
							name="code-editor"
							width="300px"
							height="300px"
							value={blackHTML}
							maxLines={4}
							setOptions={{readOnly: true}}
						/>
						<h6 className="section-header">CSS</h6>
						<AceEditor
							className="editor"
							mode="css"
							theme="github"
							name="code-editor"
							width="300px"
							height="300px"
							value={blackCSS}
							maxLines={13}
							setOptions={{readOnly: true}}
						/>
						<button className="btn-changer" onClick={() => this.changeBlackBody()} type="submit">Test Body</button>
					</div>
				</div>

				<div className="section">
					<div className="scoreboard">
						<div className="sb-header">{this.scoreboardHeader()}</div>
						<div className="sb-body">{this.createPlayers()}</div>
					</div>
					<div className="section-side">
					<h6 className="section-header">HTML</h6>
						<AceEditor
							className="editor"
							mode="html"
							theme="github"
							name="code-editor"
							width="300px"
							height="300px"
							value={scoreboardHTML}
							maxLines={4}
							setOptions={{readOnly: true}}
						/>
						<h6 className="section-header">CSS</h6>
						<AceEditor
							className="editor"
							mode="css"
							theme="github"
							name="code-editor"
							width="300px"
							height="300px"
							value={scoreboardCSS}
							maxLines={13}
							setOptions={{readOnly: true}}
						/>
						<button className="btn-changer" onClick={() => this.changeScoreboard()} type="submit">Test Scoreboard</button>
					</div>
				</div>


			</div>
    )
  }
}
