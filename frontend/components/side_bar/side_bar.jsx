import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ChannelItem from './sidebar_channel_item';
import SidebarContainer from './side_bar_container';

class Sidebar extends Component{
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
    this.openPublicChannelModal = this.openPublicChannelModal.bind(this);
    this.openDMChannelModal = this.openDMChannelModal.bind(this);
  }
  componentDidMount(){
    this.props.requestAllChannels();
  }

  logOutUser(e) {
    this.props.logout().then(() => this.props.history.push('/login'));
  }
  openPublicChannelModal(e){
    this.props.openModal('channel')
  }
  openDMChannelModal(e){
    this.props.openModal('direct_message')
  }
  render() {
    const publicChannels = this.props.publicChannels.map(channel => {
        return <ChannelItem key={channel.id} channel={channel} />
      })
    const dms = this.props.dms.map(channel => {
      return <ChannelItem key={channel.id} channel={channel} />
      })
    return (
      <div>
        <div className="sidebar">
          <p>Welcome, {this.props.currentUser.username}</p>
          <a href="#" className='log-out-style'onClick={this.logOutUser}>Log Out</a>
          <div className="channel-div">
            <button onClick={this.openPublicChannelModal}>Channels &nbsp; &nbsp; <span className='add-channel-icon'>&oplus;</span></button>
            <ul className="channel-list">
              {publicChannels}
            </ul>

            <button onClick={this.openDMChannelModal}>Direct Messages &nbsp; &nbsp; <span className='add-channel-icon'>&oplus;</span></button>
            <ul className='channel-list'>
              {dms}
            </ul>
          </div>
        </div>


      </div>
    );
  };
};


export default Sidebar;
