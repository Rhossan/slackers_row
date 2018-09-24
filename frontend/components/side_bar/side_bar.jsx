import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ChannelItem from './sidebar_channel_item';
import SidebarContainer from './side_bar_container';

class Sidebar extends Component{
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
    this.openThatModal = this.openThatModal.bind(this);
  }
  componentDidMount(){
    this.props.requestAllChannels();
  }

  logOutUser(e) {
    this.props.logout().then(() => this.props.history.push('/login'));
  }
  openThatModal(e){
    this.props.openModal('channel')
  }
  render() {
    const channels = this.props.channels.map(channel => {
        return <ChannelItem key={channel.id} channel={channel} />
      })
    return (
      <div>
        <div className="sidebar">
          <p>Welcome, {this.props.currentUser.username}</p>
          <a href="#" onClick={this.logOutUser}>Log Out</a>
          <div className="channel-div">
            <a href="#" onClick={this.props.openModal}>Channels <span class='add-channel-icon'>&oplus;</span></a>
            <ul className="channel-list">
              {channels}
            </ul>
          </div>
        </div>


      </div>
    );
  };
};


export default Sidebar;
