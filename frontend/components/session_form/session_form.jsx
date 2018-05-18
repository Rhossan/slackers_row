
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
    // this.props.history.replace(`${this.props.user.id}`);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  //todo, component will umount and clear all errors

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
    <div className="image-logo-login"></div>
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

            <label className="label-login">
              <input className="session-submit" type="submit" value={this.props.formType} />
            </label>

          </div>
          <div><h1 id="signup_header">You can <b>{this.props.navLink}</b></h1>
            <button className="demo-submit" onClick={() => {this.props.processForm({username: "Demo_User", password: "password"})}}>DEMO USER</button>
          </div>
        </form>

      </div>
    </div>

  </div>
    );
  }
}

// {this.renderErrors()}
  // <img src="../../../app/assets/images/home_illo.png"/>
export default withRouter(SessionForm);
