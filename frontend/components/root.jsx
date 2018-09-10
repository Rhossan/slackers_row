import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

export default class Root extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <Provider store={this.props.store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    );
  }

}

// componentWillMount() {
//
//   // store.dispatch(setMessages(this.props.messages));
//
//   if (typeof App !== 'undefined'){
//     App.chat = App.cable.subscriptions.create("ChatChannel", {
//       connected: function() {},
//       disconnected: function() {},
//       received: function(data) {
//         return store.dispatch(makeMessage(data['message']));
//       },
//       speak: function(message) {
//         return this.perform('speak', {
//           message: message
//         });
//       }
//     });
//   }
//
// }
