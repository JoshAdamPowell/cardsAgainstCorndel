import React from 'react';
import './css/Landing.css';
import CorndelLogo from './img/Corndel-Logo.png'

export default class Landing extends React.Component {
	constructor(props){
		super(props)
		this.state = {username: ""}
	}

	validateForm(){
		return this.state.username.length > 0;
	}

	handleSubmit(){
		console.log(`Submitted: ${this.state.username}`)
	}
	
	render() {
		return (
			<div className="landing-box">
				<div className="landing-header">
					<h1>Cards Against </h1>
					<img className="corndel-logo" src={CorndelLogo} alt="Corndel Logo"/>
				</div>
				<div className="landing-input-box">
					<input
						className=""
						name="username"
						type="text"
						placeholder="Username"
						onChange={(e) => this.setState({username: e.target.value})} />
						<button className="submit-btn" disabled={!this.validateForm()} onClick={() => this.handleSubmit()} type="submit">Submit</button>
				</div>
			</div>
		)
	}
}