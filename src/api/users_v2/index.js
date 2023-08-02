const UsersHandler_v2 = require('./handler', );
const routes = require('./routes', );

module.exports = {
  name: 'users_v2',
  version: '1.0.0',
  register: async (server, {
    service,
    validator
  }, ) => {
    const usersHandler_v2 = new UsersHandler_v2(service, validator);
    server.route(routes(usersHandler_v2));
  },
};
