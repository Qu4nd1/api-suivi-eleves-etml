import { StudentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import ClassGroup from './class_group.ts'

export default class Student extends StudentSchema {
  // Relation: 1 élève → 1 classe
  @belongsTo(() => ClassGroup)
  declare classGroup: BelongsTo<typeof ClassGroup>
}
