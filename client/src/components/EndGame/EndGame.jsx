import React from 'react';

export default class Landing extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div className="landing-heading">
                    <h1>Want to play again?</h1>
                </div>
                <div>
                    <button><a href='/'>Back to Home</a></button>
                </div>
            </div>
        )
    }
}
