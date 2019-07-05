import React from 'react';

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
			<div>
				<div className="landing-heading">
					<h1>Welcome to Cards Against Corndel</h1>
				</div>
				<div>
					<input
						className=""
						name="username"
						type="text"
						placeholder="Username"
						onChange={(e) => this.setState({username: e.target.value})} />
						<button className="submit-btn" disabled={!this.validateForm()} onClick={() => this.handleSubmit()} type="submit">Log in</button>
				</div>
			</div>
		)
	}
}