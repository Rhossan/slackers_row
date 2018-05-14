import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ChannelItem from './sidebar_channel_item';
import SidebarContainer from './side_bar_container';

class Sidebar extends Component{
  componentDidMount(){
    this.props.requestAllChannels();
  }

  render() {
    const channels = this.props.channels.map(channel => {
        return <ChannelItem key={channel.id} channel={channel} />
      })
    return (
      <div>
        <div className="sidebar">
          <a href="#">{this.props.currentUser.username}</a>
          <a href="#">Channels</a>
          <ul>
            {channels}
          </ul>
        </div>

        <div className="main">
          <h1>messages</h1>
        </div>
      </div>
    );
  };
};


export default Sidebar;
