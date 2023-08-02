class CollaborationsHandler_v2 {
  constructor(collaborationsService_v2, playlistsService_v2, validator) {
    this._collaborationsService_v2 = collaborationsService_v2;
    this._playlistsService_v2 = playlistsService_v2;
    this._validator = validator;

    this.postCollaborationHandler_v2 = this.postCollaborationHandler_v2.bind(this);
    this.deleteCollaborationHandler_v2 = this.deleteCollaborationHandler_v2.bind(this);
  }

  async postCollaborationHandler_v2(request, h) {
    this._validator.validateCollaborationPayload(request.payload);

    const { id: credentialId } = request.auth.credentials;
    const { playlistId,userId } = request.payload;

    await this._playlistsService_v2.verifyPlaylistOwner(playlistId, credentialId);
    const collaborationId = await this._collaborationsService_v2.addCollaboration(playlistId, userId);

    const response = h.response({
      status: 'success',
      message: 'Kolaborasi berhasil ditambahkan',
      data: {
        collaborationId
      }
    });

    response.code(201);
    return response;
  }

  async deleteCollaborationHandler_v2(request, ) {
    this._validator.validateCollaborationPayload(request.payload);

    const { id: credentialId } = request.auth.credentials;
    const { playlistId,userId } = request.payload;

    await this._playlistsService_v2.verifyPlaylistOwner(playlistId, credentialId);
    await this._collaborationsService_v2.deleteCollaboration(playlistId, userId);

    return {
      status: 'success',
      message: 'Kolaborasi berhasil dihapus'
    };
  }
}

module.exports = CollaborationsHandler_v2;
