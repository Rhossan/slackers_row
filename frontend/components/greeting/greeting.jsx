import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="image-logo-login"></div>
        </nav>
        <div className="splash-content">
          <div className= "splash-image">
          </div>
          <div className= "splash-body">
            <h1 className= "splash-title">Where Work Sometimes Gets Done</h1>
            <p className="splash-text">
              When your team needs to kick off a project, hire a new employee,
              deploy some code, review a sales contract, finalize next year's budget,
              measure an A/B test, plan your next office opening, and more, Slackers-row can
              kinda, sorta, maybe, have you covered. But what do I know, I am just a voice in your head.
            </p>
            <p className="splash-login">
              Click here to <Link id="link-splash" to="/login"><b>begin</b></Link>
            </p>
          </div>
        </div>
      </div>
    )
  }


// ****** might need to come back here

export default Greeting;

//this.logout could end with error
