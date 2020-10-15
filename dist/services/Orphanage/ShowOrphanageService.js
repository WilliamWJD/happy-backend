"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CreateOrphanageService {
  constructor(orphanageRepository) {
    this.orphanageRepository = orphanageRepository;
  }

  async execute({
    id
  }) {
    const orphanage = await this.orphanageRepository.findById(id);

    if (!orphanage) {
      throw Error('Orphanage not found');
    }

    return orphanage;
  }

}

var _default = CreateOrphanageService;
exports.default = _default;