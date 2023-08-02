const InvariantError = require('../../exceptions/InvariantError');
const { Collaboration_v2_PayloadSchema } = require('./schema');

const CollaborationsValidator_v2 = {
  validateCollaborationPayload: (payload) => {
    const validationResult = Collaboration_v2_PayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

module.exports = CollaborationsValidator_v2;
