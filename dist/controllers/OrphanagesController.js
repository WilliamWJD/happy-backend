"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _orphanages_view = _interopRequireDefault(require("../views/orphanages_view"));

var _OrphanageRepository = _interopRequireDefault(require("../repositories/OrphanageRepository"));

var _CreateOrphanageService = _interopRequireDefault(require("../services/Orphanage/CreateOrphanageService"));

var _ListOrphanagesService = _interopRequireDefault(require("../services/Orphanage/ListOrphanagesService"));

var _ShowOrphanageService = _interopRequireDefault(require("../services/Orphanage/ShowOrphanageService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class OrphanagesController {
  async index(req, res) {
    const orphangeRepository = new _OrphanageRepository.default();
    const listOrphanagesService = new _ListOrphanagesService.default(orphangeRepository);

    try {
      const orphanages = await listOrphanagesService.execute();
      return res.json(_orphanages_view.default.renderMany(orphanages));
    } catch (err) {
      return res.json({
        error: err.message
      });
    }
  }

  async show(req, res) {
    const orphangeRepository = new _OrphanageRepository.default();
    const showOrphanageService = new _ShowOrphanageService.default(orphangeRepository);
    const {
      id
    } = req.params;

    try {
      const orphanage = await showOrphanageService.execute({
        id: Number(id)
      });
      return res.json(_orphanages_view.default.render(orphanage));
    } catch (err) {
      return res.json({
        error: err.message
      });
    }
  }

  async store(req, res) {
    const orphangeRepository = new _OrphanageRepository.default();
    const createOrphanageService = new _CreateOrphanageService.default(orphangeRepository);

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().max(300).required(),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(Yup.object().shape({
          path: Yup.string().required()
        }))
      });
      await schema.validate(req.body, {
        abortEarly: false
      });
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
      } = req.body;
      const reqImages = req.files;
      const images = reqImages.map(image => {
        return {
          path: image.filename
        };
      });
      const orphanage = await createOrphanageService.execute({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends: open_on_weekends === 'true',
        images
      });
      return res.status(201).json(orphanage);
    } catch (err) {
      return res.status(401).json({
        error: err.message
      });
    }
  }

}

var _default = new OrphanagesController();

exports.default = _default;