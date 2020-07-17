"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class TagHasBooks extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tag_has_books';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('id_tag').unsigned().notNullable();
            table.integer('id_book').unsigned().notNullable();
            table.foreign('id_tag').references('id').inTable('tag');
            table.foreign('id_book').references('id').inTable('book');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = TagHasBooks;
//# sourceMappingURL=1593285620324_tag_has_books.js.map