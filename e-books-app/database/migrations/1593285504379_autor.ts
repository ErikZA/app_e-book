import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Autor extends BaseSchema {
  protected tableName = 'autor'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).unique().notNullable()
      table.string('nationality', 100).notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
