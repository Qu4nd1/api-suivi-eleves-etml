import type User from '#models/user'
import type Comment from '#models/comment'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'
export default class CommentPolicy extends BasePolicy {
  // Peut voir un commentaire (par défaut : tous les enseignants)
  view(user: User, comment: Comment): AuthorizerResponse {
    return user.role === 'teacher' || user.role === 'admin'
  }
  // Peut créer un commentaire (par défaut : tous les enseignants)
  create(user: User): AuthorizerResponse {
    return user.role === 'teacher' || user.role === 'admin'
  }
  // Peut mettre à jour un commentaire
  update(user: User, comment: Comment): AuthorizerResponse {
    return user.role === 'admin' || comment.teacher?.userId === user.id
  }
  // Peut supprimer un commentaire
  delete(user: User, comment: Comment): AuthorizerResponse {
    return user.role === 'admin' || comment.teacher?.userId === user.id
  }
}
