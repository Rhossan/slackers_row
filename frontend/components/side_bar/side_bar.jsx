import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ChannelItem from './sidebar_channel_item';
import SidebarContainer from './side_bar_container';

class Sidebar extends Component{
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
  }
  componentDidMount(){
    this.props.requestAllChannels();
  }

  logOutUser(e) {
    this.props.logout().then(() => this.props.history.push('/login'));
  }
  render() {
    const channels = this.props.channels.map(channel => {
        return <ChannelItem key={channel.id} channel={channel} />
      })
    return (
      <div>
        <div className="sidebar">
          <a href="#">Welcome, {this.props.currentUser.username}</a>
          <a href="#"><button onClick={this.logOutUser}>Log Out</button></a>
          <div className="channel-div">
            <a href="#">Channels</a>
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
