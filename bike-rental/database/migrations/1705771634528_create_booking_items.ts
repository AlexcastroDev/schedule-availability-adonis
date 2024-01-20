import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'booking_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('quantity').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      // Foreign keys
      table.integer('booking_id').unsigned().references('id').inTable('bookings')
      table.integer('item_id').unsigned().references('id').inTable('items')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
