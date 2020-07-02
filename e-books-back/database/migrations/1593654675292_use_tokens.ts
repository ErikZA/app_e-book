import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UseTokens extends BaseSchema {
  protected tableName = 'use_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.string('password_reset_token', 300).notNullable()
      table.timestamp('password_reset_expires').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
