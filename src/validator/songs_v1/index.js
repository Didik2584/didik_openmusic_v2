const InvariantError = require('../../exceptions/InvariantError');
const { Song_v1_PayloadSchema } = require('./schema');

const SongsValidator_v1 = {
  validateSongPayload: (payload) => {
    const validationResult = Song_v1_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongsValidator_v1;
