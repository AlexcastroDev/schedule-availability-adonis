import { DateTime } from 'luxon'
import { BaseModel, HasManyThrough, column, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import BookingItem from './BookingItem'
import Booking from './Booking'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public stock: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasManyThrough([
    () => Booking,
    () => BookingItem,
  ])
  public bookings: HasManyThrough<typeof Booking>
}
