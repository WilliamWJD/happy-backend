"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render(image) {
    return {
      id: image.id,
      url: `${process.env.WEB_URL}/uploads/${image.path}`
    };
  },

  renderMany(images) {
    return images.map(image => this.render(image));
  }

};
exports.default = _default;