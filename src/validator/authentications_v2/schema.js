const Joi = require('joi');

const PostAuthentication_v2_PayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const PutAuthentication_v2_PayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAuthentication_v2_PayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = { PostAuthentication_v2_PayloadSchema,PutAuthentication_v2_PayloadSchema,DeleteAuthentication_v2_PayloadSchema };