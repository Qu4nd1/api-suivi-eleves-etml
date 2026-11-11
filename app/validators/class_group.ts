import vine from '@vinejs/vine'

export const classGroupValidator = vine.create({
  name: vine.string().fixedLength(3),
  teacherId: vine.number().optional(),
})
