
import React from 'react';

const ChannelItem = ({channel}) => {
  return (
    <li>
      <a href="#">{channel.name}</a>
    </li>
  );
};


export default ChannelItem;


//make sure your replace link with actual link to getting that
// channel with all its messages
