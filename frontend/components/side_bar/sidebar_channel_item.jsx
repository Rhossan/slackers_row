import {Link} from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom'


const ChannelItem = ({channel}) => {
  let usernames = [];
  if (channel.channel_type === 'direct_message'){
    for(let i = 1; i < channel.usernames.length; i++){
      usernames.push(Object.values(channel.usernames[i])[0]);
    }
  }
  usernames = usernames.join(', ');
  return (
    <li>
     <NavLink activeStyle={{
    color: '#FFF',
    background: '#4C9689'
  }} to={`/main/${channel.id}`}> # {
    channel.channel_type === 'direct_message' ? usernames : channel.name
  } </NavLink>
    </li>
  );
};



export default ChannelItem;
