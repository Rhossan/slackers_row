import React from 'react';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = Object.assign({}, this.state, { channel_id: this.props.channelId });

    this.props.makeMessage(message); //this.state
    this.setState({ body:"" });
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
    return (
      <div className='footer'>
        <div className='footer_message'>
          <form onSubmit={this.handleSubmit}>
            <label className="label-message">
              <input type="text"
                placeholder="Message"
                value={this.state.body}
                className="message-input"
                onChange={this.update('body')}
              />
            </label>
          </form>
        </div>
      </div>
    )
  }
}


// render(){
//   const loginTemplate = () => {
//     return (
//       <h1>ss</h1>
//     );
//   }
//   return (
//   <div className="login">
//     Please {this.props.formType} or {this.props.navLink}
//     <div className="login-form-container">
//       <h1><b>Sign in to Slackers Row</b></h1>
//       <br/>
//
//       <form onSubmit={this.handleSubmit} className="login-form-box">
//
//         <div className="login-form">
//           <h1 id="signin_header"> Enter your <b>username</b> and <b>password</b></h1>
//
//           <label className="label-login">
//             <input type="text"
//               placeholder="username"
//               value={this.state.username}
//               onChange={this.update('username')}
//               className="login-input"
//             />
//           </label>
//           <div className="createSpace"></div>
//           <label className="label-login">
//             <input type="password"
//               placeholder="password"
//               value={this.state.password}
//               onChange={this.update('password')}
//               className='login-input'
//             />
//           </label>
//
//           <label className="label-login">
//             <input className="session-submit" type="submit" value={this.props.formType} />
//           </label>
//
//
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// }
// {this.renderErrors()}

export default (MessageForm);
