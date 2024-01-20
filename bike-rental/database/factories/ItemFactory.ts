import Item from 'App/Models/Item'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Item, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    stock: faker.number.int({
      min: 1,
      max: 10,
    }),
  }
}).build()
