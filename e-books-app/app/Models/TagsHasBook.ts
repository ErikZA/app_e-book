import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'
import Tag from './Tag'

export default class TagsHasBook extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => Book)
  public book: HasOne<typeof Book>

  @hasOne(() => Tag)
  public tag: HasOne<typeof Tag>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
