
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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
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
    const loginTemplate = () => {
      return (
        <h1>ss</h1>
      );
    }
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
                  <button className="session-submit" type="submit">{this.props.formType}</button>
                </label>
              </li>
              <li>Or</li>
              <li>
                <label className='label-login'>
                  <button className="guest-session-submit" onClick={() => {this.props.processForm({username: "Demo_User", password: "password"})}}>Demo User</button>
                </label>
              </li>
            </ul>


          </div>
        </form>

      </div>
    </div>

  </div>
    );
  }
}

// <label className="label-login">
//   <input className="session-submit" type="submit" value={this.props.formType} />
// </label>
// <p>Or</p>
// <label className='label-login'>
//   <button className="session-submit" onClick={() => {this.props.processForm({username: "Demo_User", password: "password"})}}>DEMO USER</button>
// </label>


export default withRouter(SessionForm);
