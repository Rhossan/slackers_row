import {Link} from 'react-router-dom';
import React from 'react';

const ChannelItem = ({channel}) => {
  return (
    <li>
     <Link to={`/main/${channel.id}`}> # {channel.name} </Link>
    </li>
  );
};



export default ChannelItem;
