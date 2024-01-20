import BookingItem from 'App/Models/BookingItem'
import Factory from '@ioc:Adonis/Lucid/Factory'
import ItemFactory from './ItemFactory'

export default Factory.define(BookingItem, ({ faker }) => {
  return {
    quantity: faker.number.int({
      min: 1,
      max: 10,
    }),
  }
})
.relation('item', () => ItemFactory)
.build()
