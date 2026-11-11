/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })
  .prefix('/api/v1')

// Route de test
router.get('test', async () => {
  return 'API is working!'
})

// Routes pour le CRUD /students
router.resource('students', controllers.Students).apiOnly()
/* est équivalent à :
router.group(() => {
router.get('', [controllers.Students, 'index'])
router.get(':id', [controllers.Students, 'show'])
router.post('', [controllers.Students, 'store'])
router.put(':id', [controllers.Students, 'update'])
router.patch(':id', [controllers.Students, 'update'])
router.delete(':id', [controllers.Students, 'destroy'])
}).prefix('students')
*/
// Routes pour le CRUD /teachers
router.resource('teachers', controllers.Teachers).apiOnly()
/* est équivalent à :
router.group(() => {
router.get('', [controllers.Teachers, 'index'])
router.get(':id', [controllers.Teachers, 'show'])
router.post('', [controllers.Teachers, 'store'])
router.put(':id', [controllers.Teachers, 'update'])
router.patch(':id', [controllers.Teachers, 'update'])
router.delete(':id', [controllers.Teachers, 'destroy'])
}).prefix('teachers')
*/
// Routes pour le CRUD /classGroups
router.resource('classGroups', controllers.ClassGroups).apiOnly()
/* est équivalent à :
router.group(() => {
router.get('', [controllers.ClassGroups, 'index'])
router.get(':id', [controllers.ClassGroups, 'show'])
router.post('', [controllers.ClassGroups, 'store'])
router.put(':id', [controllers.ClassGroups, 'update'])
router.patch(':id', [controllers.ClassGroups, 'update'])
router.delete(':id', [controllers.ClassGroups, 'destroy'])
}).prefix('classGroups')
*/
