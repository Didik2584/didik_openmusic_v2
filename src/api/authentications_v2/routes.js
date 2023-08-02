const routes = (handler) => [{
    method: 'POST',
    path: '/authentications',
    handler: handler.postAuthenticationHandler_v2,
  },
  {
    method: 'PUT',
    path: '/authentications',
    handler: handler.putAuthenticationHandler_v2,
  },
  {
    method: 'DELETE',
    path: '/authentications',
    handler: handler.deleteAuthenticationHandler_v2,
  },
];

module.exports = routes;