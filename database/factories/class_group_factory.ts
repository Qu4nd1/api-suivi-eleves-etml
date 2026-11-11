import factory from '@adonisjs/lucid/factories'
import ClassGroup from '#models/class_group'

export const ClassGroupFactory = factory
  .define(ClassGroup, async ({ faker }) => {
    return {
      name: faker.string.alpha({ length: 3, casing: 'upper' }),
    }
  })
  .build()
