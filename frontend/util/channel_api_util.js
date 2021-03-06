export const fetchAllChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);

export const fetchSingleChannel = id => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  })
);

export const createChannel = (channel) => {
  return $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: { channel }
  });
};
