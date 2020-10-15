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
    name,
    latitude,
    about,
    instructions,
    longitude,
    open_on_weekends,
    opening_hours,
    images
  }) {
    const checkOrphanageByName = await this.orphanageRepository.findByName(name);

    if (checkOrphanageByName) {
      throw Error('This orphanage is already registered');
    }

    const orphanage = await this.orphanageRepository.create({
      name,
      latitude,
      about,
      instructions,
      longitude,
      open_on_weekends,
      opening_hours,
      images
    });
    return orphanage;
  }

}

var _default = CreateOrphanageService;
exports.default = _default;