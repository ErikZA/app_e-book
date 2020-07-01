import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Book extends BaseSchema {
  protected tableName = 'book'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 150).notNullable()
      table.string('url_image', 550).nullable()
      table.text('resume', 'longtext').nullable()
      table.integer('uniqueWords').nullable()
      table.integer('totalWords').nullable()
      table.string('hardWords', 250).nullable()
      table.integer('id_autor').unsigned().notNullable()
      table.integer('id_level').unsigned().notNullable()
      table.foreign('id_autor').references('id').inTable('autor')
      table.foreign('id_level').references('id').inTable('level')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
