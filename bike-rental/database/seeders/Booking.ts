import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BookingFactory from 'Database/factories/BookingFactory'

export default class extends BaseSeeder {
  public async run () {
    await BookingFactory
      .with('bookingItems', 2, 
        bookingItem => bookingItem.with('item', 1)
      ).createMany(10)
  }
}
