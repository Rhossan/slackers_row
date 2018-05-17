import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MessageForm from './message_form';

class ChannelDetail extends Component {

  componentDidMount() {
   this.props.requestChannel(this.props.match.params.channelId);
   this.subscription = App.cable.subscriptions.create(
     {channel: 'ChatChannel', id: this.props.match.params.channelId},
     {received: (message) => this.props.receiveMessage(message)}
   );
   
 }

  componentDidUpdate(){
    window.scroll(0,10000000);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.requestChannel(nextProps.match.params.channelId);
    }
  }

  render(){
    const messages = this.props.messages.map(message => {
        return message ? <li>{message.channel_id} {message.body}</li> : 'blah'
      });

    return (
      <div>
        <div className="main">
          <ul className="message-list">
            {messages}
          </ul>
        </div>
        <MessageForm makeMessage={this.props.makeMessage} channelId={this.props.channel.id} />
      </div>



    )
  }

};


export default ChannelDetail;
