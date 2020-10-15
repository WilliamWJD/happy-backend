"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CreateOrphanageService {
  constructor(orphanageRepository) {
    this.orphanageRepository = orphanageRepository;
  }

  async execute() {
    const orphanages = await this.orphanageRepository.find();
    return orphanages;
  }

}

var _default = CreateOrphanageService;
exports.default = _default;