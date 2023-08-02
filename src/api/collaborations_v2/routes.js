const routes = (handler) => [{
    method: 'POST',
    path: '/collaborations',
    handler: handler.postCollaborationHandler_v2,
    options: {
      auth: 'music_jwt'
    }
  },
  {
    method: 'DELETE',
    path: '/collaborations',
    handler: handler.deleteCollaborationHandler_v2,
    options: {
      auth: 'music_jwt'
    }
  }
];

module.exports = routes;
