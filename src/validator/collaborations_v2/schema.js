const Joi = require('joi');

const Collaboration_v2_PayloadSchema = Joi.object({
  playlistId: Joi.string().required(),
  userId: Joi.string().required()
});

module.exports = { Collaboration_v2_PayloadSchema };