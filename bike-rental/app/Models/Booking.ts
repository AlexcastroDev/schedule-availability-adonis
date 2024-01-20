import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasManyThrough, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { BookingStatus } from 'Contracts/enums/BookingStatus'
import BookingItem from './BookingItem'
import Item from './Item'
import { hasManyThrough } from '@ioc:Adonis/Lucid/Orm'

export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: BookingStatus

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => BookingItem)
  public bookingItems: HasMany<typeof BookingItem>

  @hasManyThrough([
    () => Item,
    () => BookingItem,
  ])
  public bookings: HasManyThrough<typeof Item>
}
