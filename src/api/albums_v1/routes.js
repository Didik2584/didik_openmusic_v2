const routes = (handler) => [{
  method: 'POST',
  path: '/albums',
  handler: handler.postAlbumHandler_v1,
},
{
  method: 'GET',
  path: '/albums/{id}',
  handler: handler.getAlbumByIdHandler_v1,
},
{
  method: 'PUT',
  path: '/albums/{id}',
  handler: handler.putAlbumByIdHandler_v1,
},
{
  method: 'DELETE',
  path: '/albums/{id}',
  handler: handler.deleteAlbumByIdHandler_v1,
},
];

module.exports = routes;