const { PostAuthentication_v2_PayloadSchema, PutAuthentication_v2_PayloadSchema, DeleteAuthentication_v2_PayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const AuthenticationsValidator_v2 = {
  validatePostAuthenticationPayload: (payload) => {
    const validationResult = PostAuthentication_v2_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutAuthenticationPayload: (payload) => {
    const validationResult = PutAuthentication_v2_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeleteAuthenticationPayload: (payload) => {
    const validationResult = DeleteAuthentication_v2_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AuthenticationsValidator_v2;