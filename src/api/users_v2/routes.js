const routes = (handler) => [{
  method: 'POST',
  path: '/users',
  handler: handler.postUserHandler_v2,
}];

module.exports = routes;