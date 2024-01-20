import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, column, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Booking from './Booking'
import Item from './Item'

export default class BookingItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public bookingId: number

  @column()
  public itemId: number

  @belongsTo(() => Booking)
  public booking: BelongsTo<typeof Booking>

  @belongsTo(() => Item)
  public item: BelongsTo<typeof Item>
}
