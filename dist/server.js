"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _typeorm = require("typeorm");

var _path = require("path");

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _handler = _interopRequireDefault(require("./errors/handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _typeorm.createConnection)();
const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_routes.default);
app.use('/uploads', _express.default.static((0, _path.resolve)(__dirname, '..', 'uploads')));
app.use(_handler.default);
app.listen(3333, () => {
  console.log('Servidor online');
});