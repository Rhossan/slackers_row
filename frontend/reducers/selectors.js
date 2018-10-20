import values from 'lodash/values';

export const selectAllChannels = state => values(state.entities.channels);

export const selectAllDMs = state => selectAllChannels.filter(channel => channel.channel_type = "direct_message");

export const selectChannelMessages = (state, channel) => {
  debugger;
  return channel ? channel.message_ids.map(id => state.entities.messages[id]).sort((a,b) => a.id - b.id) : [];
};
