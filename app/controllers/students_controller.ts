import Student from '#models/student'
import type { HttpContext } from '@adonisjs/core/http'
import { studentValidator } from '#validators/student'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const students = await Student.query()
      .preload('classGroup')
      .orderBy('name')
      .orderBy('firstname')
    return response.ok(students)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name, firstname, classGroupId } = await request.validateUsing(studentValidator)
    const student = await Student.create({ name, firstname, classGroupId })
    return response.ok(student)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const student = await Student.query().preload('classGroup').where('id', params.id).firstOrFail()
    return response.ok(student)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const { name, firstname, classGroupId } = await request.validateUsing(studentValidator)
    const student = await Student.findOrFail(params.id)
    student.merge({ name, firstname, classGroupId })
    await student.save()
    return response.ok(student)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    await student.delete()
    return response.noContent(student)
  }
}
