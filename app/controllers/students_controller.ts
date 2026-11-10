import Student from '#models/student'
import type { HttpContext } from '@adonisjs/core/http'

export default class StudentsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const students = await Student.query().orderBy('name').orderBy('firstname')
    return response.ok(students)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const student = await Student.create(request.only(['name', 'firstname']))
    return response.ok(student)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    return response.ok(student)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    student.merge(request.only(['name', 'firstname']))
    await student.save()
    return response.ok(student)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    await student.delete()
    return response.noContent()
  }
}
