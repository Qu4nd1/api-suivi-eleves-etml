import { TeacherSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import ClassGroup from '#models/class_group'
import Comment from './comment.ts'
import User from './user.ts'

export default class Teacher extends TeacherSchema {
  // Relation : 1 enseignant → N classes
  @hasMany(() => ClassGroup)
  declare classGroups: HasMany<typeof ClassGroup>

  // Relation : 1 enseignant → N commentaires
  @hasMany(() => Comment) declare comments: HasMany<typeof Comment>

  // Relation : 1 enseignant → 1 utilisateur
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
