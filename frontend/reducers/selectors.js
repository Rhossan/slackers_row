import values from 'lodash/values';

export const selectAllChannels = state => values(state.entities.channels);


export const selectChannelMessages = (state, channel) => {

  return channel ? channel.message_ids.map(id => state.entities.messages[id]) : [];
};
//
// export const selectPokemonItem = (state, id) => {
//   return state.entities.items[id];
// };
