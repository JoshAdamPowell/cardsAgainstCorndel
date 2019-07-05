import React from 'react';
import './css/Landing.css';
import CorndelLogo from './img/Corndel-Logo.png'
import placeholders from './usernames.js';

export default class Landing extends React.Component {
	constructor(props){
		super(props)
		this.state = {username: ""}
	}

	componentDidMount(){
		let ranName = placeholders[Math.floor(Math.random() * placeholders.length)]
		document.getElementById('username-input').placeholder = ranName.name;
	}

	validateForm(){
		return this.state.username.length > 0;
	}

	handleSubmit(){
		console.log(`Submitted: ${this.state.username}`)
		fetch('/', {
			method: 'POST',
			body: JSON.stringify(this.state)
		})
		.then(res => {
			if (res.status === 204){
				window.location.href = '/game';
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
						id="username-input"
						placeholder=""
						onChange={(e) => this.setState({username: e.target.value})} />
						<button className="submit-btn" disabled={!this.validateForm()} onClick={() => this.handleSubmit()} type="submit">Onwards!</button>
				</div>
			</div>
		)
	}
}