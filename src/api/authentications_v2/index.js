const AuthenticationsHandler_v2 = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'authentications_v2',
  version: '1.0.0',
  register: async (server, {
    authenticationsService_v2,
    usersService_v2,
    tokenManager,
    validator,
  }) => {
    const authenticationsHandler_v2 = new AuthenticationsHandler_v2(
      authenticationsService_v2,
      usersService_v2,
      tokenManager,
      validator,
    );
    server.route(routes(authenticationsHandler_v2));
  },
};