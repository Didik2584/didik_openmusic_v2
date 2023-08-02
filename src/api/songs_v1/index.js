const SongsHandler_v1 = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'songs_v1',
  version: '1.0.0',
  register: async (server, {
    service,
    validator
  }, ) => {
    const songsHandler_v1 = new SongsHandler_v1(service, validator);
    server.route(routes(songsHandler_v1));
  },
};
