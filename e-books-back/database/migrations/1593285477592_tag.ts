import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tag extends BaseSchema {
  protected tableName = 'tag'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).unique().notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
