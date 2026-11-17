// database/seeders/student_seeder.ts
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { StudentFactory } from '#database/factories/student_factory'
import ClassGroup from '#models/class_group'
import Student from '#models/student'

export default class StudentSeeder extends BaseSeeder {
  async run() {
    // Crée 10 étudiants
    await StudentFactory.createMany(10)
    const classGroups = await ClassGroup.all()
    // 10 étudiants aléatoires, répartis dans chaque classe
    for (const classGroup of classGroups) {
      await StudentFactory.merge({ classGroupId: classGroup.id }).createMany(6)
    }
  }
}
