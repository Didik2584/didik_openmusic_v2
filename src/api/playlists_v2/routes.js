const routes = (handler) => [{
    method: 'POST',
    path: '/playlists',
    handler: handler.postPlaylistHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists',
    handler: handler.getPlaylistsHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists/{id}',
    handler: handler.getPlaylistByIdHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlists/{id}',
    handler: handler.deletePlaylistByIdHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },

  {
    method: 'POST',
    path: '/playlists/{playlistId}/songs',
    handler: handler.postPlaylistSongHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists/{playlistId}/songs',
    handler: handler.getPlaylistSongsHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlists/{playlistId}/songs',
    handler: handler.deletePlaylistSongByIdHandler_v2,
    options: {
      auth: 'music_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists/{id}/activities',
    handler: handler.getPlaylistActivitiesHandler_v2,
    options: {
      auth: 'music_jwt'
    }
  },
];

module.exports = routes;
