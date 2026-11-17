import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Ajout des colonnes name et firstname
      table.string('name').notNullable()
      table.string('firstname').notNullable()
      table
        .integer('class_group_id') // on ajoute une colonne class_group_id correspondant au maître de classe
        .unsigned() // la valeur ne peut pas être négative
        .references('id') // class_group_id fait référence à la colonne id d'une autre table. C'est ce lien qui définit la clé étrangère.
        .inTable('class_groups') // Précise dans quelle table se trouve la colonne id référencée.

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
