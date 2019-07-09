import React from 'react';
import './css/Cards.css';
import blackCards from './black-cards.js'
import whiteCards from './white-cards.js'

export default class Framework extends React.Component {
  constructor(props){
			super(props)
			this.state = {
				blackCard: null,
				whiteCard: null
			}
  }

  componentDidMount(){
		document.body.classList.toggle('dark-body', this.props.isDark)
		this.changeBlackBody();
		this.changeWhiteBody();
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

  render(){
    return (
      <>
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
						<iframe className="embed" src="https://codepen.io/charliequin/embed/XLyKPR"></iframe>
						<button className="btn-changer" onClick={() => this.changeWhiteBody()} type="submit">Test Body</button>
					</div>
				</div>

				<div className="section">
					<div className="black-card">
						<div className="black-card-body" dangerouslySetInnerHTML={{__html: this.state.blackCard}}>
						</div>
					</div>
					<button className="btn-changer" onClick={() => this.changeBlackBody()} type="submit">Test Body</button>
					{/* <iframe src="https://codepen.io/charliequin/embed/RzqREE"></iframe> */}
				</div>

				<div className="section">
					<div className="scoreboard">
						<div className="sb-round">
						</div>
						<div className="sb-players">
						</div>
					</div>
				</div>
			</div>
			</>
    )
  }
}
