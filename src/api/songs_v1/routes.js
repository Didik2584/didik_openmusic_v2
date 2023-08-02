const routes = (handler) => [{
  method: 'POST',
  path: '/songs',
  handler: handler.postSongHandler_v1,
},
{
  method: 'GET',
  path: '/songs',
  handler: handler.getSongsHandler_v1,
},
{
  method: 'GET',
  path: '/songs/{id}',
  handler: handler.getSongByIdHandler_v1,
},
{
  method: 'PUT',
  path: '/songs/{id}',
  handler: handler.putSongByIdHandler_v1,
},
{
  method: 'DELETE',
  path: '/songs/{id}',
  handler: handler.deleteSongByIdHandler_v1,
},
];

module.exports = routes;