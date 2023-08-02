const InvariantError = require('../../exceptions/InvariantError');
const { Album_v1_PayloadSchema } = require('./schema');

const AlbumsValidator_v1 = {
  validateAlbumPayload: (payload) => {
    const validationResult = Album_v1_PayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumsValidator_v1;
