import React from 'react';
import './css/Landing.css';
import CorndelLogo from './img/Corndel-Logo.png'
import placeholders from './usernames.js';

export default class Landing extends React.Component {
	constructor(props){
		super(props)
		this.placeholderName = placeholders[Math.floor(Math.random() * placeholders.length)]
		this.state = {username: ""}
	}

	validateForm(){
		return this.state.username.length > 0;
	}

	handleSubmit(){
		fetch('/', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({username: this.state.username})
		})
		.then(res => {
			if (res.status === 200){
				console.log('Working callback.')
				// Add redirect to main game.
			}
		})
	}
	
	render() {
		return (
			<div className="landing-box">
				<div className="landing-header">
					<h1>Cards Against</h1>
					<img className="corndel-logo" src={CorndelLogo} alt="Corndel Logo"/>
				</div>
				<div className="landing-input-box">
					<input
						className=""
						name="username"
						type="text"
						id="username"
						maxLength="15"
						placeholder={this.placeholderName.name}
						onChange={(e) => this.setState({username: e.target.value})} />
						<button className="submit-btn" disabled={!this.validateForm()} onClick={() => this.handleSubmit()} type="submit">Onwards!</button>
				</div>
			</div>
		)
	}
}