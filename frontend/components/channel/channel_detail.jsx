import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MessageForm from './message_form';

class ChannelDetail extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.requestChannel(nextProps.match.params.channelId);
      this.subscription.unsubscribe();
      this.subscription = App.cable.subscriptions.create(
        {channel: 'ChatChannel', id: nextProps.match.params.channelId},
        {received: (message) => {this.props.receiveMessage(message)}}
      );
    }
  }


 componentDidMount(){
   this.props.requestChannel(this.props.match.params.channelId);
   this.subscription = App.cable.subscriptions.create(
     {channel: 'ChatChannel', id: this.props.match.params.channelId},
     {received: (message) => {this.props.receiveMessage(message)}}
   );
 }

  componentWillUnmount(){
    this.subscription.unsubscribe();
  }

  componentDidUpdate(){
    window.scroll(0,10000000);
  }

  render(){
    const messages = this.props.messages.map(message => {
        return message ?
        <div className="block_message">
          <div className="header_message">
            <div className="profile_pic"></div>
            <div className="body_content">
              <div className="name_label_message">
                {message.username}
              </div>
              <div className="time_label_message">
                {message.created_at}
              </div>
              <div className="content_message">
                <li>{message.body}</li>
              </div>
            </div>
          </div>

        </div> : ''
      });

    return (
      <div>
        <div className="main">
          <div className="image-logo"></div>
          <ul className="message-list">
            {messages}
          </ul>
        </div>
        <MessageForm currentUser={this.props.currentUser} makeMessage={this.props.makeMessage} channelId={this.props.match.params.channelId} channelName={this.props.channel.name} />
      </div>



    )
  }

};


export default ChannelDetail;
