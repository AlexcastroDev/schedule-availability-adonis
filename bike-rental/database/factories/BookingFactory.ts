import Booking from 'App/Models/Booking'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { BookingStatus } from 'Contracts/enums/BookingStatus'
import BookingItemFactory from './BookingItemFactory'

export default Factory.define(Booking, () => {
  return {
    status: BookingStatus.draft,
  }
})
.relation('bookingItems', () => BookingItemFactory)
.build()