import React from 'react';
import Select from 'react-select';

// must handle if no one is selected and userList is empty
export default class CreateDM extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', userList: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let nextChId = this.props.channels[this.props.channels.length-1].id + 1;
    this.props.createChannel({name: this.state.name, owner_id: this.props.currentUser.id, channel_type:'direct_message', userList: this.state.userList})
    .then(channel => this.props.history.push(`/main/${channel.channel.channel.id}`))
    .then(() => this.props.closeModal());
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleChange(e){
    this.setState({
        userList:[].slice.call(e).map(o => {
            return o.value;
        })})
  }


  render(){
    let users = this.props.channels[this.props.channels.length-1];
    let {currentUser} = this.props;
    users = users.filter(el => el !== currentUser.username);
    let userOptions = users.map(user => {
      return {value: user, label: user}
    });
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

          <h1>Add Members by name</h1>
          <label>
            <h2>Members</h2>

            {// <input
                //   type='text'
                //   placeholder='Charlie, Drake'
                //   value={this.state.userList}
                //   onChange={this.update('userList')}
                // />
              }
              <div>
                <Select options={userOptions} isMulti className='dropdown-users'
                  onChange={this.handleChange}
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
