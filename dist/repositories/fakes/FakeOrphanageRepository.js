"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Orphanage = _interopRequireDefault(require("../../entities/Orphanage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeOrphanageRepository {
  constructor() {
    this.orphanages = [];
  }

  async create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
    images
  }) {
    const orphanage = new _Orphanage.default();
    Object.assign(orphanage, {
      id: new Date().getTime() / 100 * Math.random(),
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    });
    this.orphanages.push(orphanage);
    return orphanage;
  }

  async findByName(name) {
    const orphanage = this.orphanages.find(orpha => orpha.name === name);
    return orphanage;
  }

  async find() {
    const {
      orphanages
    } = this;
    return orphanages || undefined;
  }

  async findById(id) {
    const orphanage = this.orphanages.find(orpha => orpha.id === id);
    return orphanage || undefined;
  }

}

var _default = FakeOrphanageRepository;
exports.default = _default;