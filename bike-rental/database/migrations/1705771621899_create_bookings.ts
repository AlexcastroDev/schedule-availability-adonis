import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { BookingStatus } from 'Contracts/enums/BookingStatus'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('status', Object.values(BookingStatus), {
        useNative: true,
        enumName: 'booking_status',
      }).defaultTo(BookingStatus.draft)
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      // Indexes
      table.index(['id', 'status'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
