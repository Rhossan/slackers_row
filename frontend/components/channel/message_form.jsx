import React from 'react';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = Object.assign({}, this.state, { channel_id: this.props.channelId, username: this.props.currentUser.username });
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
                placeholder={`#${this.props.channelName}`}
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


export default (MessageForm);
