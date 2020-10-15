"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Orphanage = _interopRequireDefault(require("../entities/Orphanage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrphanageRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Orphanage.default);
  }

  async create(data) {
    const orphanage = this.ormRepository.create(data);
    await this.ormRepository.save(orphanage);
    return orphanage;
  }

  async findByName(name) {
    const orphanage = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return orphanage || undefined;
  }

  async find() {
    const orphanages = await this.ormRepository.find({
      relations: ['images']
    });
    return orphanages;
  }

  async findById(id) {
    const orphanage = await this.ormRepository.findOne(id, {
      relations: ['images']
    });
    return orphanage;
  }

}

var _default = OrphanageRepository;
exports.default = _default;