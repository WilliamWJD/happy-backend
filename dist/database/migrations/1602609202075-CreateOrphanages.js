"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateOrphanages1602609202075 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'orphanages',
      columns: [{
        name: 'id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'latitude',
        type: 'decimal'
      }, {
        name: 'longitude',
        type: 'decimal'
      }, {
        name: 'about',
        type: 'varchar'
      }, {
        name: 'instructions',
        type: 'varchar'
      }, {
        name: 'opening_hours',
        type: 'varchar'
      }, {
        name: 'open_on_weekends',
        type: 'boolean',
        default: false
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('orphanages');
  }

}

exports.default = CreateOrphanages1602609202075;