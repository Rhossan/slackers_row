import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import SidebarContainer from './side_bar/side_bar_container';
import ChannelDetailContainer from './channel/channel_detail_container';

const App = () => (
  <div>
    <header>
      <h1>SlackersRow</h1>
      <GreetingContainer />
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <SidebarContainer />
    <Route path="/channel/:channelId" component={ChannelDetailContainer}/>

  </div>
);

export default App;
