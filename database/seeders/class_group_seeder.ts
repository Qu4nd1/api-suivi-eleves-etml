import { ClassGroupFactory } from '#database/factories/class_group_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ClassGroupFactory.createMany(10)
  }
}
