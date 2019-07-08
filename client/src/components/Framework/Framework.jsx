import React from 'react';
import './css/Cards.css'

export default class Framework extends React.Component {
  constructor(props){
      super(props)
  }

  render(){
    return (
      <>
			<div className="container">
				<div className="header-body">
					This is the framework playground and style guide for Cards Against Corndel.<br/>
					<h5>Reference material used for designing the styling for CAC.</h5>
				</div>

				<br/>

				<div className="white-card">
					<div className="white-card-body">
						My abusive boyfriend who really isn't so bad once you get to know him.
					</div>
				</div>

				<br/>

				<div className="black-card">
					<div className="black-card-body">
						There is no God. It's just _____________ and then you die. 
					</div>
				</div>

				<br/>

				<div className="scoreboard">
					<div className="sb-round">
					</div>
					<div className="sb-players">
					</div>
				</div>

				
			</div>
			</>
    )
  }
}
