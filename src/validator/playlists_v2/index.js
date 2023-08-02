const InvariantError = require('../../exceptions/InvariantError');
const { Playlist_v2_PayloadSchema,PlaylistSong_v2_PayloadSchema } = require('./schema');

const PlaylistsValidator_v2 = {
  validatePlaylistPayload: (payload) => {
    const validationResult = Playlist_v2_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

  validatePlaylistSongPayload: (payload) => {
    const validationResult = PlaylistSong_v2_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistsValidator_v2;