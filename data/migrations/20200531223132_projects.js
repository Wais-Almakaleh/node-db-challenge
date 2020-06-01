
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments()
      tbl.string('name', 128).notNullable().unique()
      tbl.text('description')
      tbl.boolean('completed').notNullable().default(0)
    })
    .createTable('tasks', (tbl) => {
      tbl.increments()
      tbl.string('description', 2500).notNullable()
      tbl.text('notes')
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(0)
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
    .createTable('resources', (tbl) => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.text('description')
    })
    .createTable('project_resources', (tbl) => {
      tbl.increments()
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
}
