import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TagHasBooks extends BaseSchema {
  protected tableName = 'tag_has_books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_tag').unsigned().notNullable()
      table.integer('id_book').unsigned().notNullable()
      table.foreign('id_tag').references('id').inTable('tag')
      table.foreign('id_book').references('id').inTable('book')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
