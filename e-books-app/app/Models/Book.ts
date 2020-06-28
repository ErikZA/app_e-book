import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Level from './Level'
import Autor from './Autor'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public name: string

  @column({})
  public urlImag: string

  @column({})
  public resume: string

  @column({})
  public uniqueWords: number

  @column({})
  public totalWords: number

  @column({})
  public hardWords: string[]

  @hasOne(() => Autor)
  public autor: HasOne<typeof Autor>

  @hasOne(() => Level)
  public level: HasOne<typeof Level>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
