
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to SlackersRow!
          <br/>
          Please {this.props.formType} or {this.props.navLink}

          <div className="login-form">
            <br/>
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
              />
            </label>
            <input className="session-submit" type="submit" value={this.props.formType} />

          </div>
        </form>
      </div>
    );
  }
}

// {this.renderErrors()}

export default withRouter(SessionForm);
