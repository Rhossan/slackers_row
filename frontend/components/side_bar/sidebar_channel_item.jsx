import {Link} from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom'


const ChannelItem = ({channel}) => {
  return (
    <li>
     <NavLink activeStyle={{
    color: '#FFF',
    background: '#4C9689'
   }} to={`/main/${channel.id}`}> # {channel.name} </NavLink>
    </li>
  );
};



export default ChannelItem;
