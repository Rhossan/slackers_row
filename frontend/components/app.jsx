import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import SidebarContainer from './side_bar/side_bar_container';
import ChannelDetailContainer from './channel/channel_detail_container';
import ChannelModal from './modal/channel_modal';

const App = () => (
  <div>
    <ChannelModal />
    <header>
      <Link to="/" className="header-link">
      </Link>
    </header>


    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/main" component={SidebarContainer}/>
  </Switch>
  <ProtectedRoute path="/main/:channelId" component={ChannelDetailContainer}/>


  </div>
);

export default App;
