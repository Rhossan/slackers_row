import React from 'react';
import {Link, Redirect} from 'react-router-dom';
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='greeting_container'>
        <nav className="navbar">
          <div className="image-logo-login"></div>
          <ul>
            <li> <a href='#'>Why Slack?</a></li>
            <li> <a href='#'>Solutions</a></li>
            <li> <a href='#'>Resources</a></li>
            <li> <a href='#'>Prices</a></li>
          </ul>
        </nav>
        <div className="splash-content">
          <div>
            <div className= "splash-image">
            </div>
          </div>

          <div>
            <div className= "splash-body">
              <h1 className= "splash-title">Where Work Sometimes Gets Done</h1>
              <p className="splash-text">
                When your team needs to kick off a project, hire a new employee,
                deploy some code, review a sales contract, finalize next year's budget,
                measure an A/B test, plan your next office opening, and more, Slackers-row can
                kinda, sorta, maybe, have you covered. But what do I know, I am just a voice in your head.
              </p>
              <a href='#/login' className='get-started-button'>
                Get Started
              </a>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

// ****** might need to come back here

export default Greeting;

//this.logout could end with error
