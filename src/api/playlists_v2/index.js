const PlaylistsHandler_v2 = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'playlists_v2',
  version: '1.0.0',
  register: async (server, {
    service,
    validator
  }) => {
    const playlistsapiHandler_v2 = new PlaylistsHandler_v2(service, validator);
    server.route(routes(playlistsapiHandler_v2));
  },
};
