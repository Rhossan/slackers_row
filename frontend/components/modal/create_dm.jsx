import React from 'react';

export default class CreateDM extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', userIds: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextChId = this.props.channels[this.props.channels.length-1].id + 1;
    this.props.createChannel({name: this.state.name, owner_id: this.props.currentUser.id, channel_type:'direct_message', userIds: this.state.userIds.split(',')});
    this.props.closeModal();
    this.props.history.push(`/main/${nextChId}`);
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render(){
    return (
      <div className='contents'>
        <form>
          <h1>Create a DM</h1>
          <h3>" are where your members communicate. They're best when organized around a topic - #leads, for example."</h3>
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

          <h1>Add Members by id, spaced between</h1>
          <label>
            <h2>Name</h2>
            <div className='input-container'>

                <input
                  type='text'
                  placeholder='23,28'
                  value={this.state.userIds}
                  onChange={this.update('userIds')}
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
