import React from 'react';

export default class CreateChannel extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextChId = this.props.channels[this.props.channels.length-1].id + 1;
    this.props.createChannel({name: this.state.name, owner_id: this.props.currentUser.id, channel_type:'channel'});
    .then(channel => this.props.history.push(`/main/${channel.channel.channel.id}`))
    .then(() => this.props.closeModal());

  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render(){
    return (
      <div className='contents'>
        <form>
          <h1>Create a Channel</h1>
          <h3>"Channels are where your members communicate. They're best when organized around a topic - #leads, for example."</h3>
          <label>
            <h2>Name</h2>
            <div className='input-container'>

                <input
                  type='text'
                  placeholder='e.g. leads'
                  value={this.state.name}
                  onChange={this.update('name')}
                />

            </div>
          </label>
          <div className='button-container'>
            <button
              className='button-cancel'
              onClick={this.props.closeModal}
              >Cancel</button>
            <button
              className='button-submit'
              onClick={this.handleSubmit}
              >Create Channel</button>
          </div>
        </form>
      </div>
    )
  }
}
