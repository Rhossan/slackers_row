import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MessageForm from './message_form';

class ChannelDetail extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {

      this.props.requestChannel(nextProps.match.params.channelId);
      this.subscription.unsubscribe();
      debugger
      this.subscription = App.cable.subscriptions.create(
        {channel: 'ChatChannel', id: nextProps.match.params.channelId},
        {received: (message) => {debugger; this.props.receiveMessage(message)}}
      );
    }


  }

 //  componentDidMount() {
 //   // this.props.requestChannel(this.props.match.params.channelId);
 //   // if (this.props.match.params.channelId !== this.props.match.params.channelId) {
 //   //   this.props.requestChannel(this.props.match.params.channelId);
 //   // }
 //   // this.subscription = App.cable.subscriptions.create(
 //   //   {channel: 'ChatChannel', id: this.props.match.params.channelId},
 //   //   {received: (message) => this.props.receiveMessage(message)}
 //   // );
 //
 // }
 componentDidMount(){
   this.props.requestChannel(this.props.match.params.channelId);
   this.subscription = App.cable.subscriptions.create(
     {channel: 'ChatChannel', id: this.props.match.params.channelId},
     {received: (message) => {debugger;this.props.receiveMessage(message)}}
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
        return message ? <div><div className="lol">{message.username}{message.created_at}</div><li>{message.body}</li></div> : 'blah'
      });

    return (
      <div>
        <div className="main">
          <ul className="message-list">
            {messages}
          </ul>
        </div>
        <MessageForm currentUser={this.props.currentUser} makeMessage={this.props.makeMessage} channelId={this.props.match.params.channelId} />
      </div>



    )
  }

};


export default ChannelDetail;
