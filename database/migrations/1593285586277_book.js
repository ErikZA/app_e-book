"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Book extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'book';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 150).notNullable();
            table.string('url_image', 550).nullable();
            table.text('resume', 'longtext').nullable();
            table.integer('uniqueWords').nullable();
            table.integer('totalWords').nullable();
            table.string('hardWords', 250).nullable();
            table.integer('id_autor').unsigned().notNullable();
            table.integer('id_level').unsigned().notNullable();
            table.foreign('id_autor').references('id').inTable('autor');
            table.foreign('id_level').references('id').inTable('level');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Book;
//# sourceMappingURL=1593285586277_book.js.map