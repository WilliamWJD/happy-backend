"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorHandler = (error, req, res, next) => {
  console.error(error);
  return res.status(500).json({
    message: 'Internal server error'
  });
};

var _default = errorHandler;
exports.default = _default;