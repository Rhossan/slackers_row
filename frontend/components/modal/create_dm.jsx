import React from 'react';

export default class CreateDM extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', userList: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextChId = this.props.channels[this.props.channels.length-1].id + 1;
    let id;
    this.props.createChannel({name: this.state.name, owner_id: this.props.currentUser.id, channel_type:'direct_message', userList: this.state.userList})
    .then(channel => this.props.history.push(`/main/${channel.channel.channel.id}`))
    .then(() => this.props.closeModal());
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render(){
    return (
      <div className='contents'>
        <form onSubmit={this.handleSubmit}>
          <h1>Create a DM</h1>
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

          <h1>Add Members by name, spaced with a comma</h1>
          <label>
            <h2>Members</h2>
            <div className='input-container'>

                <input
                  type='text'
                  placeholder='Charlie, Drake'
                  value={this.state.userList}
                  onChange={this.update('userList')}
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
              >Create DM</button>
          </div>
        </form>
      </div>
    )
  }
}
