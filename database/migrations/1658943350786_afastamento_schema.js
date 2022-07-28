'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AfastamentoSchema extends Schema {
  up () {
    this.create('afastamentos', (table) => {
      table.increments()
      table.string('nome_militar',128).notNullable()
      table.string('descricao',256).notNullable()
      table.string('categoria',128).notNullable()
      table.string('dataInicio')
      table.string('dataFim')
      table.timestamps()
    })
  }

  down () {
    this.drop('afastamentos')
  }
}

module.exports = AfastamentoSchema
