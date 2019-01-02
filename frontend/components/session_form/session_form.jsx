
import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.processGuest = this.processGuest.bind(this);
    this.processHelper = this.processHelper.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  processGuest(){
    const button = document.getElementById('session-submit');
    const username = "Demo_User".split('');
    const password = "password".split('');
    this.setState({username: '', password: ''}, () =>
      this.processHelper(username, password, button)
    );
    // {this.props.processForm({username: "Demo_User", password: "password"})}
  }

  processHelper(username, password, button){
    if (username.length > 0) {
      this.setState(
        { username: this.state.username + username.shift() }, () => {
          window.setTimeout( () =>
            this.processHelper(username, password, button), 75);
        }
      );
    } else if (password.length > 0) {
      this.setState(
        { password: this.state.password + password.shift() }, () => {
          window.setTimeout( () =>
            this.processHelper(username, password, button), 75);
        }
      );
    } else {
      button.click();
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){

    let {formType} = this.props;
    return (

  <div>
    <nav className="navbar session-navbar">
      <div className="image-logo-login"></div>
      <ul>
        <li> <a href='#/login' className='session-navbar-button'>Sign In</a></li>
        <li> <a href='#/signup' className='session-navbar-button'>Sign Up</a></li>
      </ul>
    </nav>
    <div className="login">

      <div className="login-form-container">
        <h1><b>Sign in to Slackers Row</b></h1>


        <form onSubmit={this.handleSubmit} className="login-form-box">

          <div className="login-form">
            <h1 id="signin_header"> Enter your <b>username</b> and <b>password</b></h1>

            <label className="label-login">
              <input type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <div className="createSpace"></div>
            <label className="label-login">
              <input type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
              />
            </label>


            <ul className='session-button-container'>
              <li>
                <label className="label-login">
                  <button id="session-submit" type="submit">{this.props.formType}</button>
                </label>
              </li>
            </ul>
          </div>
        </form>
        <ul className='guest-button-container'>
          {
              formType === 'Sign in' ?
              <div>
                <li id='or-label'>Or</li>
                <li>
                  <label className='label-login'>
                    <button className="guest-session-submit" onClick={this.processGuest}>Demo User</button>
                  </label>
                </li>
              </div>
              : ''
          }
        </ul>
      </div>
    </div>

  </div>
    );
  }
}

export default withRouter(SessionForm);
