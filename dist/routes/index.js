"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _Upload = _interopRequireDefault(require("../config/Upload"));

var _OrphanagesController = _interopRequireDefault(require("../controllers/OrphanagesController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
const upload = (0, _multer.default)(_Upload.default);
routes.get('/orphanages', _OrphanagesController.default.index);
routes.get('/orphanages/:id', _OrphanagesController.default.show);
routes.post('/orphanages', upload.array('images'), _OrphanagesController.default.store);
var _default = routes;
exports.default = _default;