const Joi = require('joi');

const Playlist_v2_PayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const PlaylistSong_v2_PayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = { Playlist_v2_PayloadSchema,PlaylistSong_v2_PayloadSchema };