import ClassGroup from '#models/class_group'
import { classGroupValidator } from '#validators/class_group'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassGroupsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const classGroup = await ClassGroup.query().orderBy('name')
    return response.ok(classGroup)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name } = await request.validateUsing(classGroupValidator)
    const classGroup = await ClassGroup.create({ name })
    return response.ok(classGroup)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const classGroup = await ClassGroup.findOrFail(params.id)
    return response.ok(classGroup)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const { name } = await request.validateUsing(classGroupValidator)
    const classGroup = await ClassGroup.findOrFail(params.id)
    classGroup.merge({ name })
    await classGroup.save()
    return response.ok(classGroup)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const classGroup = await ClassGroup.findOrFail(params.id)
    await classGroup.delete()
    return response.noContent(classGroup)
  }
}
