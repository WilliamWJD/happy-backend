"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class createImages1602614132315 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'images',
      columns: [{
        name: 'id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'path',
        type: 'varchar'
      }, {
        name: 'orphanage_id',
        type: 'integer'
      }],
      foreignKeys: [{
        name: 'ImageOrphanage',
        columnNames: ['orphanage_id'],
        referencedTableName: 'orphanages',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('images', 'ImageOrphanage');
    await queryRunner.dropTable('images');
  }

}

exports.default = createImages1602614132315;