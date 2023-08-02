const CollaborationsHandler_v2 = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'collaborations_v2',
  version: '1.0.0',
  register: async (server, {
    collaborationsService_v2,
    playlistsService_v2,
    validator
  }) => {
    const collaborationsHandler_v2 = new CollaborationsHandler_v2(
      collaborationsService_v2, playlistsService_v2, validator
    );
    server.route(routes(collaborationsHandler_v2));
  }
};
