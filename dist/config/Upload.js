"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = require("path");

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  storage: _multer.default.diskStorage({
    destination: (0, _path.resolve)(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const fileHash = _crypto.default.randomBytes(10).toString('hex');

      const fileName = `${fileHash}-${file.originalname}`;
      return cb(null, fileName);
    }
  })
};
exports.default = _default;